import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import { ROUTES } from "../constants/routes";

const buttonStyle = {padding: "10px", border: "1px solid #000"}

export default function HomePage() {



    return (
        <>
            <Header/>

            <main>
                <h1 style={{marginBottom: "10px"}}>Talentina MVP</h1>

                <Link to={ROUTES.POSTULARSE} style={buttonStyle}>Postularse</Link>

                <Link to={ROUTES.DASHBOARD} style={buttonStyle}>Dashboard</Link>

            </main>
        </>
    );
}