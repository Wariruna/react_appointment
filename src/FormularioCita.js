import { Link, NavLink, Route } from "react-router-dom";

export const FormularioCita = (props) => {

    const handlerFormulario = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/cita", {
            "method": "post",
            "headers": {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },

            "body": JSON.stringify({
                "fechaCita": e.target[0].value,
                "email": e.target[4].value,
                "horaInicio": e.target[1].value,
                "nombreUsuario": e.target[2].value,
                "telefono": e.target[3].value,
                "tratamientoDto": {
                    "tratamientoIdDto": e.target[5].value
                }
            })
        })
            .then(response => response.json())
            .then(json => alert("Muchas gracias por tu reserva " + json.nombreUsuario + "\n"
                + "Tu cita es: \n"
                + "Fecha: " + json.fechaCita + "\n"
                + "Hora: " + json.horaInicio + "\n"
                + "NO OLVIDES APUNTARLA "));
                
                window.location.replace('/');
    }



    return (
        <form onSubmit={handlerFormulario}>
            <table>
                <tbody>
                    <tr>
                        <td className="titulo-formulario">Fecha</td>
                        <td><input className="input-form" type="text" name="fechaCita" value={props.fecha} readOnly /></td>
                    </tr>
                    <tr>
                        <td className="titulo-formulario">Hora</td>
                        <td><input className="input-form" type="text" name="horaInicio" value={props.hora} readOnly /></td>
                    </tr>

                    <tr>
                        <td className="titulo-formulario">Nombre</td>
                        <td><input className="input-form" type="text" name="nombreUsuario" /></td>
                    </tr>
                    <tr>
                        <td className="titulo-formulario">Teléfono</td>
                        <td><input className="input-form" type="text" name="telefono" /></td>
                    </tr>
                    <tr>
                        <td className="titulo-formulario">Email</td>
                        <td><input className="input-form" type="text" name="email" /></td>
                    </tr>
                    <tr>
                        <td><input className="input-form" type="hidden" name="tratamientoIdDto" value={props.idTr} /></td>
                    </tr>
                    <tr>
                        <input type="submit" value="Reservar" ></input>
                    </tr>
                </tbody>
            </table>

        </form >
    )
}