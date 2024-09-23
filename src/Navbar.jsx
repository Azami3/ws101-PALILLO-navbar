import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./styles.css";

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="navdiv">
                <h1>Azami</h1>
                <ul>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink  to="/About">About</CustomLink>
                    <CustomLink  to="/Contact"> CONTACT</CustomLink>
                </ul>
            </div>
        </nav>
    )
}


function CustomLink({ to, children, ...props}) {
    const resolvedpath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedpath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    )
} 