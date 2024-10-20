import React, { useState } from 'react';
// Main App Component
const App = () => {
  return (
    <div className="container">
      {/* Pass `isReadOnly` prop to the UserProfile component */}
      <UserProfile isReadOnly={true} />
    </div>
  );
};

// User Profile Component with Profile and Cover Picture in Read-Only Mode
const UserProfile = ({ isReadOnly }) => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    role: 'Software Engineer',
    phone: '123-456-7890',
    email: 'johndoe@example.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    description: 'Experienced software engineer with a passion for web development.',
    profilePicture: '/pic/man.jpg',
    coverPicture: '/pic/back.webp', 
    businessHours: {
      sunday: '08:00 - 20:00',
      monday: '08:00 - 20:00',
      tuesday: '08:00 - 20:00',
      wednesday: '08:00 - 20:00',
      thursday: '08:00 - 20:00',
      friday: '08:00 - 20:00',
      saturday: 'Closed',
    },
  });

  return (
    <div className="profile-section">
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
            <p>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></p>
          </div>
        </div>
      </div>

      {/* Display Business Hours */}
      <div className="business-hours-section">
        <h2>Business Hours</h2>
        {Object.entries(profile.businessHours).map(([day, hours]) => (
          <p key={day}>{day.charAt(0).toUpperCase() + day.slice(1)}: {hours}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
