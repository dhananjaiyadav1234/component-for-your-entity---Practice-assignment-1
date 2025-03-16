import React from "react";
import "../App.css"; // Ensure correct CSS path

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/100"; // Placeholder image
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 (123) 456-7890";
  const address = "123 Main St, Cityville, Country";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt={name} className="profile-photo" />
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default Usercard;



