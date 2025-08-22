import DashboardTable from "../components/DashboardTable/DashboardTable";
import Header from "../components/Header/Header";



export default function CandidatosPage() {



    return (
    <>
        <Header/>

        <main>
            <h1 style={{
                color: "#05143B",
                fontWeight: "400",
                padding: "25px"
            }}>
                Dashboard postulantes
            </h1>

            <DashboardTable/>

        </main>
    </>
    );
}