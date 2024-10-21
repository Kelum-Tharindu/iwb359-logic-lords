type User record {|
    readonly string UserID;
    string U_Name;
    string U_Email;
    string U_PassWord;

|};

//DTOs
type UserRegisterDTO record {|
    string U_Name;
    string U_Email;
    string U_PassWord;
  
|};

type UserLoginDTO record {|
    string U_Email;
    string U_PassWord;
|};