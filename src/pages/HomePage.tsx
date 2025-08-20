import { Link } from "react-router-dom";

const buttonStyle = {padding: "10px", border: "1px solid #000"}

export default function HomePage() {



    return (
        <div>
            <h1 style={{marginBottom: "10px"}}>Talentina MVP</h1>

            <Link to="/candidatos" style={buttonStyle}>Postularse</Link>

            <Link to="/dashboard" style={buttonStyle} >Dashboard</Link>
            
        </div>
    );
}