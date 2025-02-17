import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  const [started, setStarted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();  // Get current route

  // Function to handle Get Started click
  const handleStart = () => {
    setStarted(true);
    navigate("/home");
  };

  const showFooter = location.pathname !== "/favorites";  // Footer should not be shown on favorites page

  return (
    <MovieProvider>
      <div className="app-container">
        <NavBar started={started} />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Welcome onStart={handleStart} />} // Pass onStart to Welcome
            />
            {started && (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/favorites" element={<div>Favorites Page</div>} />
              </>
            )}
          </Routes>
        </main>

        {showFooter && <Footer />} {/* Render Footer only if not on Favorites page */}
      </div>
    </MovieProvider>
  );
}

export default App;
