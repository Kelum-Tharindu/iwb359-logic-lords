import React, { useState } from 'react';

import './CreateBusinessCard.css'; 

const App = () => {
  return (
    <div className="container">
      <UserProfile />
      {/* <Services /> */}
      {/* <MakeAppointment /> */}
    </div>
  );
};

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    role: '',
    phone: '',
    email: '',
    linkedin: '',
    description: '',

    profilePicture: null, // To store the profile picture
    coverPicture: null,   // To store the cover picture

    businessHours: {
      sunday: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
    },
  });

  const [isDataInserted, setIsDataInserted] = useState(false);

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle business hours input
  const handleBusinessHoursChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      businessHours: {
        ...prevProfile.businessHours,
        [name]: value,
      },
    }));
  };

  // Handle profile picture upload
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle cover picture upload
  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          coverPicture: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle save action (insert data)
  const handleInsert = () => {
    if (profile.name && profile.phone && profile.email) {
      setIsDataInserted(true);
      console.log('Profile data inserted:', profile);
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <div className="profile-section">
      {isDataInserted ? (
        <div className="profile-display">
          {/* Display Cover Picture */}
          {profile.coverPicture && (
            <div className="cover-picture-container">
              <img src={profile.coverPicture} alt="Cover" className="cover-picture" />
            </div>
          )}
          <div className="profile-picture-container">
            {/* Display Profile Picture */}
            {profile.profilePicture && (
              <img
                src={profile.profilePicture}
                alt="Profile"
                className="profile-picture"
              />
            )}
            <h2>{profile.name}</h2>
            <h3>{profile.role}</h3>
            <p>{profile.description}</p>
            <div className="contact-info">
              <p>Phone: {profile.phone}</p>
              <p>Email: {profile.email}</p>
              <p>LinkedIn: <a href={profile.linkedin}>{profile.linkedin}</a></p>
            </div>

            {/* Display Business Hours */}
            <div className="business-hours-display">
              <h3>Business Hours:</h3>
              <p>Sunday: {profile.businessHours.sunday || 'Closed'}</p>
              <p>Monday: {profile.businessHours.monday || 'Closed'}</p>
              <p>Tuesday: {profile.businessHours.tuesday || 'Closed'}</p>
              <p>Wednesday: {profile.businessHours.wednesday || 'Closed'}</p>
              <p>Thursday: {profile.businessHours.thursday || 'Closed'}</p>
              <p>Friday: {profile.businessHours.friday || 'Closed'}</p>
              <p>Saturday: {profile.businessHours.saturday || 'Closed'}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2>Enter Your Profile Information</h2>

          {/* Cover Picture Upload */}
          <label>Cover Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverChange}
          />
          {profile.coverPicture && (
            <img
              src={profile.coverPicture}
              alt="Cover Preview"
              className="cover-picture-preview"
            />
          )}
          <br />

          {/* Profile Picture Upload */}
          <label>Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePictureChange}
          />
          {profile.profilePicture && (
            <img
              src={profile.profilePicture}
              alt="Profile Preview"
              className="profile-picture-preview"
            />
          )}
          <br />

          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
          <br />
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={profile.role}
            onChange={handleChange}
          />
          <br />
          <label>Description:</label>
          <textarea
            name="description"
            value={profile.description}
            onChange={handleChange}
          />
          <br />
          <label>Phone (required):</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            required
          />
          <br />
          <label>Email (required):</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
          <br />
          <label>LinkedIn:</label>
          <input
            type="text"
            name="linkedin"
            value={profile.linkedin}
            onChange={handleChange}
          />
          <br />

          {/* Business Hours Input */}
          <h3>Business Hours</h3>
          <label>Sunday:</label>
          <input
            type="text"
            name="sunday"
            value={profile.businessHours.sunday}
            onChange={handleBusinessHoursChange}
          />
          <br />
          <label>Monday:</label>
          <input
            type="text"
            name="monday"
            value={profile.businessHours.monday}
            onChange={handleBusinessHoursChange}
          />
          <br />
          <label>Tuesday:</label>
          <input
            type="text"
            name="tuesday"
            value={profile.businessHours.tuesday}
            onChange={handleBusinessHoursChange}
          />
          <br />
          <label>Wednesday:</label>
          <input
            type="text"
            name="wednesday"
            value={profile.businessHours.wednesday}
            onChange={handleBusinessHoursChange}
          />
          <br />
          <label>Thursday:</label>
          <input
            type="text"
            name="thursday"
            value={profile.businessHours.thursday}
            onChange={handleBusinessHoursChange}
          />
          <br />
          <label>Friday:</label>
          <input
            type="text"
            name="friday"
            value={profile.businessHours.friday}
            onChange={handleBusinessHoursChange}
          />
          <br />
          <label>Saturday:</label>
          <input
            type="text"
            name="saturday"
            value={profile.businessHours.saturday}
            onChange={handleBusinessHoursChange}
          />
          <br />

          <button className="save-btn" onClick={handleInsert}>
            Save Profile
          </button>
        </>
      )}
    </div>
  );
};

export default App;


