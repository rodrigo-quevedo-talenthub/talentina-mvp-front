import { useState } from "react";
import { postCandidato } from "../../api/candidatos/postCandidato";
import type { PostCandidato } from "../../types";

import styles from "./CandidatosForm.module.css"


const apiSubmit = async (candidato: PostCandidato) => {
    await postCandidato(candidato);        
};


export default function CandidatosForm() {

    const [nombre, setNombre] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefono, setTelefono] = useState<string>("");
    const [skills, setSkills] = useState<string[]>([]);
    const [skillActual, setSkillActual] = useState<string>("");
    const [experiencia, setExperiencia] = useState<number>(0);
    const [educacion, setEducacion] = useState<string>("");
    const [urlLinkedin, setUrlLinkedin] = useState<string>("");
    const [experiencia1, setExperiencia1] = useState<string>("");
    const [experiencia2, setExperiencia2] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const candidato: PostCandidato = {
            nombre,
            email,
            telefono,
            skills: skills,
            experiencia,
            educacion,
            urLinkedin: urlLinkedin,
            experiencia1,
            experiencia2
        };

        apiSubmit(candidato);

        // Limpiar
        setNombre("");
        setEmail("");
        setTelefono("");
        setSkills([]);
        setExperiencia(0);
        setEducacion("");
        setUrlLinkedin("");
        setExperiencia1("");
        setExperiencia2("");
    };

    return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formGroup}>
            <label className={styles.label}>Nombre</label>
            <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" className={styles.input} required />
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className={styles.input} required/>
        </div>

         <div className={styles.formGroup}>
            <label className={styles.label}>Teléfono</label>
            <input value={telefono} onChange={e => setTelefono(e.target.value)} placeholder="Teléfono" className={styles.input} required/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Skills (Ingresar de a una y apretar ENTER)</label>
            <input 
                value={skillActual} placeholder="Skills"
                onChange={e => setSkillActual(e.target.value)} 
                onKeyDown={(e)=> {
                    if (e.key === "Enter" && skillActual.trim() !== "") {
                        let newArrSkills = skills;
                        newArrSkills.push(skillActual);

                        setSkills(newArrSkills);
                        setSkillActual("");

                        e.preventDefault();//evita que se mande el form
                    }

                }}
                className={styles.input}
            />

            <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <span key={index} className={styles.skillItem}>{skill}</span>
                ))}
            </div>
        </div>

     
        <div className={styles.formGroup}>
            <label className={styles.label}>Años de experiencia</label>
            <input type="number" value={experiencia} onChange={e => setExperiencia(Number(e.target.value))} placeholder="Años de experiencia" className={styles.input} required/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Educación</label>
            <input value={educacion} onChange={e => setEducacion(e.target.value)} placeholder="Educación" className={styles.input} required/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>URL LinkedIn</label>
            <input value={urlLinkedin} onChange={e => setUrlLinkedin(e.target.value)} placeholder="URL LinkedIn" className={styles.input}/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Experiencia 1</label>
            <input value={experiencia1} onChange={e => setExperiencia1(e.target.value)} placeholder="Experiencia 1" className={styles.input}/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Experiencia 2</label>
            <input value={experiencia2} onChange={e => setExperiencia2(e.target.value)} placeholder="Experiencia 2" className={styles.input}/>
        </div>

        <button type="submit" className={styles.submitButton}>Enviar</button>
    </form>
    )

}