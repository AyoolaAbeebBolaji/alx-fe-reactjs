import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: 12 }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: 12 }}>
        About
      </Link>
      <Link to="/services" style={{ marginRight: 12 }}>
        Services
      </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
