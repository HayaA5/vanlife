import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
export default function Vans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("/api/vans").then(data => data.json()).then(data => setVans(data.vans))
    }, [])
    const vanElements = vans?.map(van => (
        <Link className="site-logo"
            to={`/vans/${van.id}`}
            aria-label={`View details for ${van.name}, 
         priced at $${van.price} per day`}
        >
            <div key={van.id} className="van-tile">
                <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        </Link>
    ))
    return (
        <div className="van-list-container">
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}