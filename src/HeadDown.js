import React from 'react'
import './HeadDwon.css'

export default function HeadDown() {
    const buttonData=[
        {
            name:"Cancellation Flexbility"
        },
        {
            name:"Type of Place"
        },
        {
            name:"Price"
        },
        {
            name:"Room and beds"
        },
        {
            name:"More Filters"
        },
    ]
  return (
    <div className="headDown">
        <div className="data">
            <p>80 stays. 3 January to 6 january.2 Guests</p>
            <h1>Stays Nearby</h1>
        </div>
<div className="buttonDiv">
            {
                buttonData.map((item, index) =>{
                    return <button className="all_btn"key={index}>{item.name}</button>
                })
            }
      </div>
    </div>
  )
}
