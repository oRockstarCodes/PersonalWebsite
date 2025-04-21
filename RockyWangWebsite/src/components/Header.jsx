import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="header">
            <h1>Rocky Wang</h1>
            <h2>About</h2>
            <h2>Projects</h2>
            <h2>Skills</h2>
            <h2>Contact Me</h2>
        </div>
    )
}

export default Header;