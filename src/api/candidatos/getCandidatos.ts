import type { Candidato } from "../../types";

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchUsers(): Promise<Candidato[]> {
  
    const res = await fetch(API_URL+'/candidatos');
  
    return res.json();
}