import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav className="header">
                {/* <h1> #VANLIFE</h1> */}

                <div >
                    <Link to="/about">About</Link>
                    <Link to="/home">Vans</Link>
                </div>
            </nav>
        </header>
    )
}