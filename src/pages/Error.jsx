import React from "react";
import './Error.css'
const Error = ({message})=> {

    return(
        <div className="container">
            <div className="error">
                <h1>Error</h1>
                <p>{message}</p>
            </div>
        </div>
    )
}
export default Error