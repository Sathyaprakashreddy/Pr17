import React, { useState } from 'react';
import { uploadDonation } from './uploadDonation'; 

const DonationForm = () => {
 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !imageFile || !donorName || !email || !phone) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      
      await uploadDonation(title, description, imageFile, donorName, email, phone);
      alert("Donation uploaded successfully!");
      
  
      setTitle('');
      setDescription('');
      setImageFile(null);
      setDonorName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error("Error uploading donation:", error);
      alert("Failed to upload donation.");
    }
  };
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div>
      <h2>Submit a Donation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </div>

        <div>
          <label>Donor Name</label>
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

export default DonationForm;
