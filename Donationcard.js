

const DonationCard = ({ item, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(item)}>
      {item.imageUrl && (
        <img src={item.imageUrl} alt={item.title} width="200" />  
      )}
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="donor-info">
        <h4>Donor Information</h4>
        <p><strong>Name:</strong> {item.donorName}</p>
        <p><strong>Email:</strong> {item.email}</p>
        <p><strong>Phone:</strong> {item.phone}</p>
      </div>
    </div>
  );
};

export default DonationCard;
