import img from './como-llegar-5-sentidos-alicante.png'
import { useEffect } from "react"
import { Link } from "react-router-dom"

export const CardTratamiento = ({ nav, url, to }) => {

    let uri = "'./" + url + "'"
    console.log(uri)
    const style = {
        background: "url(  '" + uri + "'  )"
    }



    return (
            <Link to={to}>
                <div className="card-tratamiento" >
                    <img src={url} />
                    <p className="nav-title-tratamiento" >{nav}</p>

                </div>
            </Link >
    )
}