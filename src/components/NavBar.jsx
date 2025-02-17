import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar({ started, setStarted }) {  // Accept setStarted prop
    const handleHomeClick = () => {
        setStarted(false); // Set started to false to go to the welcome page
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">MoviezzApp</Link>
            </div>
            <div className="navbar-links">
                <Link
                    to="/"
                    className="nav-link"
                    onClick={handleHomeClick}  // Reset started state when clicking Home
                >
                    Home
                </Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    );
}

export default NavBar;
