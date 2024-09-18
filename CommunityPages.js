
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';  
import { db } from './fire';  
import DonationCard from './Donationcard';

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [filterdonates , setfilterDonates]= useState([]);

 useEffect(() => {
        fetchDonations();
  }, []);

 const fetchDonations = async () => {
    const querySnapshot = await getDocs(collection(db, 'donations'));
    const donationsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDonations(donationsData);
    setfilterDonates(donationsData);2
 }

  const handleClick = (item) => {
    setfilterDonates(item);
   
  };

  return (
    <div className="donation-list">
      {filterdonates.map((item) => (
        <DonationCard key={item.id} item={item} onClick={handleClick} />
      ))}
    </div>
  );
};

export default DonationList;
