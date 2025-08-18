import type { PostCandidato } from "../../types";

const VITE_API_URL = import.meta.env.VITE_API_URL;



export async function postCandidato(candidato: PostCandidato) {

    console.log("api url:", VITE_API_URL);
    console.log("import.meta.env",import.meta.env);

    const res = await fetch(VITE_API_URL+"/candidato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(candidato),
        credentials: "include"
    });

    return res.json();
}

