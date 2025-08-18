
export interface Candidato {
    id: number,
    nombre: string,
    email: string,
    telefono: string,
    skills: string[],
    experiencia: number,
    educacion: string,
    estado: string, 
    urLinkedin: string,
    experiencia1: string,
    experiencia2: string
}

export interface PostCandidato {
    nombre: string,
    email: string,
    telefono: string,
    skills: string[],
    experiencia: number,
    educacion: string,
    urLinkedin: string,
    experiencia1: string,
    experiencia2: string
}

    // "id": 1,
    // "nombre": "Juan Pérez",
    // "email": "juan.perez@example.com",
    // "telefono": "+54 9 351 1234567",
    // "skills": ["Java", "Spring Boot", "SQL"],
    // "experiencia": 3,
    // "educacion": "Ingeniería en Sistemas",
    // "estado": "preseleccionado",// podria ser "enviado" | "preseleccionado" | "seleccionado"
    // "urLinkedin": "https://....",
    // "experiencia1": "texto",
    // "experiencia2": "texto"