import { Link } from "react-router";

export default () => {
    return(
        <header className="d-flex justify-content-between align-items-center py-5">
            <h3>Logotipas</h3>
            <nav>
                <ul className="d-flex gap-4 m-0" style={{ listStyle: 'none' }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About us</Link>
                    </li>
                    <li>
                        <Link to="/prices">Prices</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}