import { Card } from "./Card";
import imgComoLlegar from "./como-llegar-5-sentidos-alicante.png";
import imgCogerCita from "./reservar-cita-5-sentidos-alicante.png";

export const Home = () => {

    return (
        <section className="container">
            <h2>Bienvenid@ al Centro de Belleza 5 Sentidos</h2>
            <div className="section-cards">
                <a href="https://www.google.com/maps/dir/38.3471318,-0.497437/Centro+de+Belleza+5+Sentidos,+C.+Alicante,+94,+03690+Sant+Vicent+del+Raspeig,+Alicante/@38.3832079,-0.5023298,12.92z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0xd6237acd24eb08f:0x913afd33cc498c00!2m2!1d-0.5074898!2d38.383252!3e0"><Card id="como-llegar" src={imgComoLlegar} nav="CÓMO LLEGAR" /></a>
                <Card id="coger-cita" src={imgCogerCita} nav="COGER CITA" to="pedir-cita" />
            </div>
        </section>
    )
}