import React, { useState } from 'react'
import './App.css'

export default function Update() {
    const [data, setData] = useState("Ahbay")


    function update() {
        setData("Lavish Sir")
    }
    return (
        <div className="update">

            <h1>{data}</h1>
            <button onClick={update}>Update</button>

        </div>
    )
}
