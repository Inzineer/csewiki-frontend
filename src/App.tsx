import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Faculties from "./pages/Faculties";
import Events from "./pages/Events";
import Facilities from "./pages/Facilities";
import Research from "./pages/Research";
import FAQ from "./pages/FAQ";
import { useState, useEffect } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };

    // Listen for changes to localStorage (important for logout)
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
      <Route path="/faculties" element={isAuthenticated ? <Faculties /> : <Navigate to="/" />} />
      <Route path="/events" element={isAuthenticated ? <Events /> : <Navigate to="/" />} />
      <Route path="/facilities" element={isAuthenticated ? <Facilities /> : <Navigate to="/" />} />
      <Route path="/research" element={isAuthenticated ? <Research /> : <Navigate to="/" />} />
      <Route path="/faq" element={isAuthenticated ? <FAQ /> : <Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
