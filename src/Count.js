import React, { useState } from 'react'
import './App.css'
export default function Count() {
    const [count, setCount] = useState(0);


    return (
        <div className="count">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
