import React from "react"
import Film from "./Film"

const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return (
            <Film title={film.name} key={film.id} url={film.url}/>
        )
    })

    return (
    <div className="filmlist">
        {filmNodes}
    </div>
    )
}


export default FilmList