import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1e40af",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
      }}
    >
      <div style={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}>
        MyLogo
      </div>
      <ul style={{ listStyle: "none", display: "flex", gap: "1.5rem" }}>
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={{ color: "white", textDecoration: "none" }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
