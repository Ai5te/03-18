import { Link } from "react-router";
import Logo from "./logo/Logo";
import './Header.css'

export default () => {
    return (
        <header className="d-flex justify-content-between align-items-center p-3">
            <Logo />
            <nav>
                <ul className="d-flex gap-4 m-0" style={{ listStyle: 'none' }}>
                    <li>
                        <Link to="/" style={{ color: 'white' }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/search" style={{ color: 'white' }}>Search</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}