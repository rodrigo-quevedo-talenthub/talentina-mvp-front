import { Link } from "react-router-dom";
import DashboardTable from "../components/DashboardTable/DashboardTable";
import Header from "../components/Header/Header";


export default function CandidatosPage() {



    return (
    <>
        <Header/>

        <main>
            <h1>Dashboard</h1>
            
            <DashboardTable/>

            <Link to="/">Home</Link>
        </main>
    </>
    );
}