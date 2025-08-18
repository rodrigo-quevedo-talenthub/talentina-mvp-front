import type { Candidato } from "../../types";

const API_URL = import.meta.env.VITE_API_URL;

export async function getCandidato(id: number): Promise<Candidato> {
    const res = await fetch(API_URL+`/candidato/${id}`);
  
    return res.json();
}