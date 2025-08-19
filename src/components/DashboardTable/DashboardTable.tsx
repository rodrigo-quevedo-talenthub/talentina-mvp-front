import useBuscarCandidatos from "../../hooks/useBuscarCandidatos";



export default function DashboardTable() {

    const { arrCandidatos, loading, error } = useBuscarCandidatos();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <ul>
            {arrCandidatos.map((candidato)=>{
                return <li key={candidato.id}>{JSON.stringify(candidato)}</li>
            })}
        </ul>
    )
}