import { storage, db } from './firebase'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';  
import { collection, addDoc } from 'firebase/firestore';  

 export const uploadDonation = async (title, description, imageFile, donorName, email, phone) => {
  
  const imageRef = ref(storage, `donations/${imageFile.name}`);
  await uploadBytes(imageRef, imageFile);

  const imageUrl = await getDownloadURL(imageRef);
 
  await addDoc(collection(db, 'donations'), {
    title,
    description,
    imageUrl,
    donorName,   
    email,       
    phone,         
  });

  console.log('Donation uploaded successfully');
};
