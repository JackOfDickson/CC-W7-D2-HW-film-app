import React from "react"

const Film = ({title, id, url}) => {

    return (
        <p><a href={url}>{title}</a></p>
    )
}


export default Film