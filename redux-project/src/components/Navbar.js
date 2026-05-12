import { Link } from "react-router-dom"

import { useSelector } from "react-redux"

function Navbar(){

    const cart = useSelector(state => state.cart)

    return(

        <nav>

            <h1>Movie Booking</h1>

            <ul>

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/movies">Movies</Link>
                </li>

                <li>
                    <Link to="/cart">
                        Cart ({cart.length})
                    </Link>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar