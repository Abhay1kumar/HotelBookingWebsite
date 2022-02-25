import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Cards from './Cards'

import './Cards.css'
import Banner from './Banner'


export default function Main() {

    const cardsData = [
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx7iRanOWl2TtAE4k2cM_CDPF8o8Tyev6nAQ&usqp=CAU',
            title: 'Online Experiences',
            description: 'Unique activities we can do together, led by a world of hosts.',
            price: '₹7130/night',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCH416Er6IAvsz-PFJhZLmcV1kCTjIjFzYg&usqp=CAU',
            title: 'Unique stays',
            description: 'Spaces that are more than just a place to sleep.',
            price: '₹9180/night',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_Nmd2rB6XJzE-5YLoas9TYBYEYj3E9CzwA&usqp=CAU',
            title: 'Entire homes',
            description: 'Comfortable private places, with room for friends or family.',
            price: '₹5590/night',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhqfgGGecvELsPkLLY8ArjwwctzAB3-z-Hw&usqp=CAU',
            title: '3 Bedroom Flat in Bournemouth',
            description: 'Superhost with a stunning view of the beachside in Sunny Bournemouth',
            price: '₹6530/night',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAJ6AGgOkNywOcXL-tJ3bygCzEP-BuWskcQ&usqp=CAU',
            title: 'Penthouse in London',
            description: 'Enjoy the amazing sights of London with this stunning penthouse',
            price: '₹8630/night',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgy-z7zUhqPZ-8O7B2spyhEO7IuNOmNvxVw&usqp=CAU',
            title: '1 Bedroom apartment',
            description: 'Superhost with great amenities and a fabolous shopping complex nearby',
            price: '₹9830/night',
        },
    ]
    return (
        <>
            <div className="headerMain">
                <Header />
            </div>
            <div className="container">
                <Banner />

                {
                    cardsData.map((item, index) => {
                        return (

                            <Cards key={index} src={item.src} title={item.title} description={item.description} price={item.price} />

                        )
                    })
                }
            </div>

            <Footer />
        </>

    )
}
