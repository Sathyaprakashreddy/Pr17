
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';  
import { db } from './fire';  
import DonationCard from './Donationcard';

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      const querySnapshot = await getDocs(collection(db, 'donations'));
      const donationsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDonations(donationsData);
    };

    fetchDonations();
  }, []);

  const handleClick = (item) => {
    console.log(item);
    // Handle card click (e.g., navigate to details or open modal)
  };

  return (
    <div className="donation-list">
      {donations.map((item) => (
        <DonationCard key={item.id} item={item} onClick={handleClick} />
      ))}
    </div>
  );
};

export default DonationList;
