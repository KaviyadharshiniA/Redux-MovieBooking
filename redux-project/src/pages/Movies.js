import { useDispatch } from "react-redux"

import { addMovie } from "../redux/action"

function Movies(){

    const dispatch = useDispatch()

    const movies = [

        {
            id:1,
            name:"Leo"
        },

        {
            id:2,
            name:"Vikram"
        },

        {
            id:3,
            name:"Master"
        }
    ]

    return(

        <div className="movie-container">

            {
                movies.map((item)=>(

                    <div className="card" key={item.id}>

                        <h2>{item.name}</h2>

                        <button
                            onClick={() => dispatch(addMovie(item))}
                        >
                            Book Movie
                        </button>

                    </div>
                ))
            }

        </div>
    )
}

export default Movies