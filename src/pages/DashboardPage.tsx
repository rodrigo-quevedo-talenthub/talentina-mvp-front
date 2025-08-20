import { Link } from "react-router-dom";
import DashboardTable from "../components/DashboardTable/DashboardTable";


export default function CandidatosPage() {



    return (
        <div>
        
            <h1>Dashboard</h1>
            
            <DashboardTable/>

            <Link to="/">Home</Link>
        </div>
    );
}