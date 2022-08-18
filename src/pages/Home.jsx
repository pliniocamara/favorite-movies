import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Página: Home</h1>
            <nav>
                <Link to="/about">About</Link>{' '}
                <Link to="/user">User</Link>
            </nav>
        </>
    );
}