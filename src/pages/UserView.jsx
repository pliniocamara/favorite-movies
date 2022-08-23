import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserView() {
    const [user, setUser] = useState({});
    const params = useParams();

    const getUser = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <h1>Usuário: {user.name}</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}