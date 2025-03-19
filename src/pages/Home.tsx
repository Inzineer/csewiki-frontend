import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Clear authentication
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="home-container">
      <h1>Welcome to the CSE Department Wiki</h1>
      <nav>
        <ul>
          <li><Link to="/faculties">Faculties</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/facilities">Facilities</Link></li>
          <li><Link to="/research">Ongoing Research</Link></li>
          <li><Link to="/faq">FAQs & Contacts</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
