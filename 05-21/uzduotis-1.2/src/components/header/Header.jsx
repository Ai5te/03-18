import { Link } from "react-router";

export default () => {
    return (
        <header className="d-flex justify-content-between align-items-center py-5">
            <h3>Logo</h3>
            <nav>
                <ul className="d-flex gap-4 m-0" style={{ listStyle: 'none' }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}