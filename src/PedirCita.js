import { useState } from "react"
import { CardTratamiento } from "./CardTratamiento";

export const PedirCita = () => {
    const [json, setJson] = useState([]);

    fetch('http://localhost:8080/tratamientos/')
        .then((response) => response.json())
        .then((json) => setJson(json))

    return (
        <section className="container">
            <h2>Escoge tu tratamiento</h2>
            <div className="section-cards">
                {json?.map((tratamiento) => {
                    return (
                        <>
                            <CardTratamiento key={tratamiento.tratamientoId} nav={tratamiento.nombre} to={"/elegir-dia?id=" + tratamiento.tratamientoId} url={tratamiento.urlImg}></CardTratamiento>
                        </>
                    )
                })}
            </div>
        </section>
    )

}