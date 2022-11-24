import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { FormularioCita } from "./FormularioCita";

export const ElegirDia = () => {
    const [listaDias, setListaDias] = useState([]);
    const [dia, setDia] = useState("");
    const [citas, setCitas] = useState([]);
    const [hora, setHora] = useState();


    let today = new Date()
    let arrayDias = [];
    let location = useLocation();
    let param = new URLSearchParams(location.search).get('id'); //esta funcion desestructura el search del locate junto con el get y el nombre del parámetro.



    useEffect(() => {
        fetch('http://localhost:8080/citas-disponibles?idTratamiento=' + param + '&dia=' + dia)
            .then((response) => response.json())
            .then(jsonCitas => setCitas(jsonCitas));
    }, [dia])

    useEffect(() => {
        for (let i = 0; i < 20; i++) {
            let createnewDate = new Date(today.getTime() + (24 * i) * 60 * 60 * 1000);
            if (createnewDate.getDay() === 0) {
                continue;
            }
            arrayDias.push(createnewDate);
        }
        setListaDias(arrayDias);
    }, [])

    useEffect(() => {
        console.log("citas: " + citas);
    }, [citas])

    const handlerSeleccionDelDia = (e) => {
        let diaElegido = e.target.textContent;
        let convirtiendo = diaElegido.split('-');
        if (convirtiendo[1].length < 2) {
            convirtiendo[1] = "0" + convirtiendo[1];
        }
        if (convirtiendo[0].length < 2) {
            convirtiendo[0] = "0" + "" + convirtiendo[0];
        }
        let diaElegidoConvertido = convirtiendo[2] + "-" + convirtiendo[1] + "-" + convirtiendo[0];

        setDia(diaElegidoConvertido);
        setHora("");
    }

    const handlerSeleccionDeHora = (e2) => {
        let horaElegida = e2.target.textContent;

        setHora(horaElegida);
    }


    return (
        <div className="container">
            <section className="section-escoger-fecha">
                <h3 className="title">Escoge un día:</h3>
                {listaDias?.map((dia) => {
                    return (
                        <button className="btn-dia" key={dia.getDate()} onClick={handlerSeleccionDelDia} >{dia.getDate() + "-" + (dia.getMonth() + 1) + "-" + dia.getFullYear()}</button>
                    )
                })}
            </section>
            <div className="concretar-cita">
                <section className="section-escoger-hora">
                    {Array.isArray(citas) && (
                        <h3 className="title">Escoge una hora:</h3>
                    )}

                    {Array.isArray(citas) && (
                        citas.map((cita) => {
                            if (cita[0].toString().length < 2) {
                                cita[0] = '0' + cita[0];
                            }
                            if (cita[1].toString().length < 2) {
                                cita[1] = '0' + cita[1];
                            }
                            return (
                                <button key={cita} className="btn-hora" onClick={handlerSeleccionDeHora}>{cita[0] + ":" + cita[1]}</button>
                            )

                        }
                        )
                    )
                    }
                </section>
                <section className="section-formulario">
                    {hora && <h3 className="title">Completa tu Cita</h3>}
                    {hora && (

                        <FormularioCita fecha={dia} hora={hora} idTr={param} />
                    )}
                </section>
            </div>


        </div >

    )

}