import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
    let navigate = useNavigate();

    const voltar = () => {
        navigate('/')
    }

    return (
        <>
            <h1>Página não encontrada</h1>
            <button onClick={voltar}>Voltar</button>
        </>
    );
}