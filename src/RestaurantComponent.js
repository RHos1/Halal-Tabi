
import './RestaurantComponent.css'
import { IoFastFood } from "react-icons/io5";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react';
import { FaCreditCard } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";



export default function RestaurantComponent (){
    const images = [
        {
            original: "/caption5.jpg",
            thumbnail: "/caption5(Custom).jpg",
        },
        {
            original: "/caption4.jpg",
            thumbnail: "/caption4(Custom).jpg",
        },
        {
            original: "/about-reservations-you.jpg",
            thumbnail: "/about-reservations-youC.jpg",
        },
        {
            original: "/caption(4).jpg",
            thumbnail: "/caption(4)C.jpg",
        },
        {
            original: "/caption(3).jpg",
            thumbnail: "/caption(3)C.jpg",
        },
        {
            original: "/caption2.jpg",
            thumbnail: "/caption2.jpg",
        },
    ]
    class MyGallery extends React.Component {
        render() {
            return <ImageGallery items={images} />;
        }
    }
    
    return(

    <>
    
    <section className="RestaurantComponent">
    <h1>Yakiniku Iwasaki</h1>
    </section>
    
    <MyGallery />

    <div className="RestaurantContainer">
    
    <section className="AddInfo">
        <h1>Explore</h1>
        <a href="https://shorturl.at/lcY73">2 Chome−8−2 Keiwan Building A, Ueno, Taito 110-0005 Tokyo Prefecture</a>
        <h1>Location</h1>
        <div className="MapContainer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7016524400738!2d139.76989987523578!3d35.708958772578285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188deb4e6f5b43%3A0x42385d2e8cae4257!2sYakiniku%20IWASAKI!5e0!3m2!1sen!2suk!4v1742475524923!5m2!1sen!2suk" width="600" height="450" style = {{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <h1>About</h1>
        <p>Yakiniku Iwasaki offers premium Black Wagyu beef that is obtained whole and processed to halal standards. Delicious yakiniku is produced by carefully hand-slicing each chop to highlight its unique flavor. Enjoy the rich sweetness and umami that come through in every bite. Savor delicious, fresh, and odorless Wagyu. We also have a license to serve raw meat, and our limited-edition marbled yukhoe and other treats will please raw meat enthusiasts. Savor the taste of premium beef in a relaxed, somewhat secluded setting.</p>
        <h1>Details</h1>
        <p><IoFastFood /> Halal</p>
        <p><FaCreditCard /> Accepts Digital Payments</p>
        <p><GoClockFill /> Reservations</p>
       
        
    </section>



    
    <section className="Hours">
        <h1>Hours</h1>
        <div className="Text-Contents">
            <div className="Days">
            <p>Monday:   11:30am - 5am</p>
            <p>Tuesday:  11:30am - 5am</p>
            <p>Wednesday:  11:30am - 5am</p>
            <p>Thursday:   11:30am - 5am</p>
            <p>Friday:     11:30am - 5am</p>
            <p>Saturday:   11:30am - 5am</p>
            <p>Sunday:    11:30am - 5am</p>
            
            

           

            </div>


           
        </div>
    </section>
    
    </div>
    </>
    )

}
