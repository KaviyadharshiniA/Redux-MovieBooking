import { useSelector } from "react-redux"

function Cart(){

    const cart = useSelector(state => state.cart)

    return(

        <div className="movie-container">

            {
                cart.map((item,index)=>(

                    <div className="card" key={index}>

                        <h2>{item.name}</h2>

                    </div>
                ))
            }

        </div>
    )
}

export default Cart