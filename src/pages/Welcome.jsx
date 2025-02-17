import React, { useState } from "react";
import "../css/Welcome.css";

function Welcome({ onStart }) {
    // State to store the search query
    const [searchQuery, setSearchQuery] = useState("");

    // Function to handle search
    const handleSearch = () => {
        if (searchQuery) {
            // Open Google search with the movie name in the query
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            window.open(searchUrl, "_blank"); // Opens the URL in a new tab
        } else {
            console.log("Please enter a search term.");
        }
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/019/585/873/non_2x/mva-logo-and-graphics-design-art-icons-isolated-on-black-background-vector.jpg"
                    alt="MoviezApp Logo"
                    className="logo"
                />
                <h1>Welcome to MoviezApp</h1>
                <p className="slogan">🍿 Search. Discover. Enjoy.</p>
            </header>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Update state with input value
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <section className="about-us">
                <h2>About Us</h2>
                <p>
                    MoviezApp is your one-stop destination to search for any movie effortlessly.
                    Stay updated, explore new releases, and find the perfect movie anytime, anywhere.
                </p>
            </section>

            {/* Get Started button */}
            <button className="get-started-btn" onClick={onStart}>
                Get Started
            </button>
        </div>
    );
}

export default Welcome;
