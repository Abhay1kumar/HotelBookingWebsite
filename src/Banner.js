import React from 'react'
import { Link } from 'react-router-dom';
import './Banner.css'


export default function Banner() {
    

    return (
        <>
            <div className="banner__search">
            <span className="date">Search Dates</span>
            </div>

                <div className="banner__side">
                    <div className="bannerPage" >
                        <div className="bannerbtn">
                        <h1>Go Near</h1>
                        <h4>plan a different kind of getaway to uncover hidden gems near you.</h4>
                        <Link to="/search"><button className="btn">Explore Nearby stays</button></Link>
                        </div>
                    </div>
            <div className="banner">
                <img src="https://globalimagecreation.com/wp-content/uploads/2018/01/Hotel-Photographer-7132-Kengo-Kuma-SuiteJMM_4419-min.jpg" alt=""/>
            </div>
            </div>
            </>
    
    )
}
