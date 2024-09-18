import logo from './assets/donation-logo.png';  

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Donation Platform Logo" className="logo-image" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/contact">Our Partners</a></li>
        
      </ul>
      <div className="donate-button">
        <a href="/add-donation">Donate</a>
      </div>
    </nav>
  );
};

export default Header;
