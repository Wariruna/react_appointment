import { Link } from "react-router-dom"

export const Card= ({ nav,id , to }) => {

    return (
    
        <Link to={to}>
        <div className="card" id={id}>
            
            <p className="nav-title">{nav}</p>
            
        </div>
        </Link>
    )
}