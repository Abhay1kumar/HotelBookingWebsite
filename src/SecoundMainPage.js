import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './SecMainPage.css'
import StarIcon from '@mui/icons-material/Star';

export default function SecoundMainPage() {

    const data = [
        {
            src:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f7/8b/38/exterior.jpg?w=900&h=-1&s=1',
            description1: 'Private room in center of Pune',
            description2:'Independant luxury studio apartment',
            description3: '2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen',
            rating:'4.5',
            price1: '₹4220 / night',
            price2: '₹4547 total',
            

        },
        {
            src:'https://www.tajhotels.com/content/dam/luxury/hotels/taj-palace-delhi/images/at_a_glance/16x7/Facade3.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description1: 'Private room in center of Manali',
            description2:'Manali Studio Apartments',
            description3: '4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine',
            rating:'3.8',
            price1: '₹3240 / night',
            price2: '₹5866 total',

        },
        {
            src:'https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/headmast-desktop/welcomhotel-bhubaneswar.jpg',
            description1: 'Private room in center of Goa',
            description2:'30 mins to Panji Street, Excel Goa',
            description3: '1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
            rating:'5',
            price1: '₹5340 / night',
            price2: '₹6433 total',

        },
        {
            src:'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
            description1: 'Private room in center of Bengaluru',
            description2:'Spacious Peaceful Modern Bedroom',
            description3: '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning',
            rating:'3.4',
            price1: '₹4340 / night',
            price2: '₹6547 total',

        },
        {
            src:'https://www.theparkhotels.com/images/site-specific/kolkata/home/HERO-FACADE-NIGHT.jpg',
            description1: 'Private room in center of Kullu',
            description2:'Spacious Peaceful Modern Bedroom',
            description3: '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning',
            rating:'4.1',
            price1: '₹4340 / night',
            price2: '₹6547 total',

        },
        {
            src:'https://www.princehotels.com/wp-content/uploads/2019/04/tokyo-bay-shiomi-prince-hotel-facade-1920.jpg',
            description1: 'Private room in center of Manali',
            description2:'5 Star Luxury Apartment',
            description3: '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
            rating:'4.5',
            price1: '₹7340 / night',
            price2: '₹10547 total',

        },
    ]
  return (
<>

{
    
    data.map((item, index)=>{
        return  <div key={index} className="mainDiv">
        <div className='imageDiv'>
            <img src={item.src} alt="" />
        </div>
        <div className='description'>
            <p>{item.description1}</p>
            <h3>{item.description2}</h3>
            <p>__</p>
            <p>{item.description3}</p>
            <h3 className="rating"><StarIcon className='starIcon'/>{item.rating}</h3>
        </div>
        <div className='price'>
            <h1>{item.price1}</h1>
            <p>{item.price2}</p>
        </div>
        <div className='icon'>
        <FavoriteIcon className='icons'/>
        </div>
      
    </div>
    })
   
}

</>
   
   
  )
}
