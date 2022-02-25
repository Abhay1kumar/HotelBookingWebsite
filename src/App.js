import React from 'react'
import Main from './Main'
import StayPage from './StayPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} exact></Route>
                    <Route path="/search" element={<StayPage />} exact></Route>
                </Routes>
            </Router>
        </>
    )
}
