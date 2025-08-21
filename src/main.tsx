import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from './App.tsx'

import './styles/index.css'

import prisma from '../prisma/config/prisma'

async function buscarCandidatos() {
    const result = await prisma.candidato.findMany()
    return result;
}

const result = buscarCandidatos();  
console.log(result);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>,
)

