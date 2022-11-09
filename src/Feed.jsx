import React from 'react'
import Feedheader from './Feedheader'
import Feeder from './Feeder'
import './feedheader.css'

function Feed() {
  return (
    <div className="feed1 ms-3">
      <Feedheader/>
      <Feeder title ="Masdar City" followers="6300 followers" promo="Promoted" img2="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7F6GWKjt7oF4W_C_f6Eh47VH-kAXXtjeCg&usqp=CAU"/>
      <Feeder title ="FoundersCard" followers="88300 followers" promo="A Membership community of more than 100,000 entrepreneurs and business executives" img2="https://media-exp1.licdn.com/dms/image/sync/D5618AQFpwfddNw_P2Q/companyUpdate-article-image-shrink_627_1200/0/1662818296110/ScreenShot2022-05-25at104955AMpng-1jpg?e=1670457600&v=beta&t=MD7lhJJ_ZcxtY6TZLOOMv1BRDRErUI_pZunDoH0Wy7E" img="https://media-exp1.licdn.com/dms/image/C4E0BAQGuLOt8Ri5zqw/company-logo_100_100/0/1560368995702?e=1675900800&v=beta&t=3Jv9V-LSavdmNfd3N0sI84tyCabiJVZLhN-N5JaX8zQ"/>
      <Feeder title ="Ras Al Khaimah Economic Zone (RAKEZ)" followers="138,092 followers" promo="RAKEZ is a nurturing hub for businesses operating in commercial, service & consultancy businesses." img2="https://media-exp1.licdn.com/dms/image/sync/D4D18AQHVAg9UN62h1A/companyUpdate-article-image-shrink_627_1200/0/1663699611203/RAKEZ-Campaign-EducationalBusiness20221600x1600jpg?e=1670457600&v=beta&t=clsoQLHtLAQIV3iLP2-8GG59fwi2z_BJSIApJDeSuUI"/>
      

    </div>
  )
}

export default Feed