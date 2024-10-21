import ballerina/sql;
import ballerinax/mysql;
import ballerina/random;

configurable int port = ?;
configurable string host = ?;
configurable string user = ?;
configurable string database = ?;
configurable string password = ?;
configurable mysql:Options & readonly connectionOptions = ?;


mysql:Client dbClient = check new (
    host = host,
    port = port,
    database = database,
    user = user,
    password = password,
    options = connectionOptions
);

function insertUser (UserRegisterDTO newUser) returns User|error {
    string tabel = "User";
    
    //check if email already exists
    sql:ParameterizedQuery checKEmailQuery = `SELECT Email FROM user WHERE Email = ${newUser.U_Email}`;
    stream<record{}, error?> resultStream = dbClient->query(checKEmailQuery);
    record{}|error? result = resultStream.next();

    if (result is record{}) {
        return error("Email already exists");
    }

    //insert the user to the database
    string|error randomID =  generateRandomId(tabel);
    if (randomID is error) {
        return error("Error while generating the random ID");
    }

    sql:ParameterizedQuery insertQuery = `INSERT INTO user (U_ID, Name, U_Email,U_PassWord) VALUES 
                                        (${randomID}, ${newUser.U_Name}, ${newUser.U_Email}, ${newUser.U_PassWord})`;
    var saveResult = dbClient->execute(insertQuery);

    if (saveResult is sql:Error) {
        return error("Error while saving the user");
    }

    //get the user from the database
    sql:ParameterizedQuery selectQuery = `SELECT UserID, Name, Email, Gender FROM user WHERE UserID = ${randomID}`;
    User newSavedUser = check dbClient->queryRow(selectQuery);
    newSavedUser.U_PassWord = "********";

    return newSavedUser;
}   

function logUser (UserLoginDTO user) returns User|error {
    sql:ParameterizedQuery selectQuery = `SELECT UserID, Name, Email FROM User WHERE Email = ${user.U_Email} AND Password = ${user.U_PassWord}`;
    User usr = check dbClient->queryRow(selectQuery);
    usr.U_PassWord = "********";
    
    return usr;
}


function getUser (int id) returns User|error{
    sql:ParameterizedQuery selectQuery = `SELECT U_ID, U_Name, U_Email FROM User WHERE id = ${id}`;
    return dbClient->queryRow(selectQuery);
}

function selectAllUsers () returns User[]|error{
    sql:ParameterizedQuery selecyAllquery = `SELECT U_ID, U_Name, U_Email FROM User`;
    stream<User, error?> userStream = dbClient->query(selecyAllquery);
    return from User user in userStream select user;
}


// //generate random ID for evry table 
function generateRandomId(string tabel) returns string|error {
    string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    string randomID = "";
    int ID_LENGTH = 15;
    string Key = "";

    foreach int i in 0 ..< ID_LENGTH {
        int randomCharIndex = check random:createIntInRange(0, chars.length());
        string randomChar = chars[randomCharIndex];

        randomID += randomChar;
    }

    if (tabel == "User") {
        randomID = "USR" + randomID;
        Key = "UserID";
    } 
    else if (tabel == "Event") {
        randomID = "EVT" + randomID;
        Key = "EventID";
    }
    else if (tabel == "Notification") {
        randomID = "NOT" + randomID;
        Key = "NotificationID";
    }

    sql:ParameterizedQuery selectQuery = `SELECT ${Key} FROM ${tabel} WHERE ${Key} = ${randomID}`;
    stream<record{}, error?> resultStream = dbClient->query(selectQuery);
    record{}|error? result = resultStream.next();

    if (result is record{}) {
        return generateRandomId(tabel);        
    }

    return randomID;
}