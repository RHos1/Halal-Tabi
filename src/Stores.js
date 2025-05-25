import Slider from 'react-slick';
import {useNavigate} from 'react-router-dom';
import ImageGallery from "react-image-gallery";

const data = [{
    id: 1,
    title: 'Camii Market',
    img: '/IMG_9594-1024x768-1.jpg',
    location: "Tokyo",
    url: "https://maps.app.goo.gl/5QwPtpToF3mTni5z9",
    address: "〒151-0065 Tokyo, Shibuya, Ōyamachō",
    map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3673935524757!2d139.6738279756342!3d35.66795467259152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3a3a8afb347%3A0x6671c9922f229daf!2sTokyo%20Camii%20Halal%20Market!5e0!3m2!1sen!2suk!4v1744389533236!5m2!1sen!2suk",
    description: "",
    images: [{
      original: "IMG_3954.jfif",
      thumbnail: "/IMG_3954.jfif",
  },
  {
      original: "/halal-mart-1.jpg",
      thumbnail: "/halal-mart-1.jpg",
  },
  {
      original: "/Tokyo-Camii-Halal-Market-1.jpg",
      thumbnail: "/Tokyo-Camii-Halal-Market-1.jpg",
  },
  {
      original: "/Tokyo-Camii-Halal-Market-2.jpg",
      thumbnail: "/Tokyo-Camii-Halal-Market-2.jpg",
  },
  {
      original: "/Tokyo-Camii-Halal-Market-4.jpg",
      thumbnail: "/Tokyo-Camii-Halal-Market-4.jpg",
  },
  {
      original: "/Tokyo-Camii-Halal-Market-3.jpg",
      thumbnail: "/Tokyo-Camii-Halal-Market-3.jpg",
  },],
    
    
  }
, {
  id: 2, 
  title: 'Shinjuku Halal Food',
  img: '/2023-02-10.jpg',
  location: "Shinjuku",
  url: "https://maps.app.goo.gl/5QwPtpToF3mTni5z9",
    address: "〒151-0065 Tokyo, Shibuya, Ōyamachō",
    map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3673935524757!2d139.6738279756342!3d35.66795467259152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3a3a8afb347%3A0x6671c9922f229daf!2sTokyo%20Camii%20Halal%20Market!5e0!3m2!1sen!2suk!4v1744389533236!5m2!1sen!2suk",
    description: "",
    images: [{
      original: "unnamed (1).jpg",
      thumbnail: "/unnamed (1).jpg",
  },
  {
      original: "/halal-mart-1.jpg",
      thumbnail: "/halal-mart-1.jpg",
  },
  {
      original: "/Tokyo-Camii-Halal-Market-1.jpg",
      thumbnail: "/Tokyo-Camii-Halal-Market-1.jpg",
  },
  {
      original: "/Tokyo-Camii-Halal-Market-2.jpg",
      thumbnail: "/Tokyo-Camii-Halal-Market-2.jpg",
  },
  {
      original: "/Tokyo-Camii-Halal-Market-4.jpg",
      thumbnail: "/Tokyo-Camii-Halal-Market-4.jpg",
  },
  {
      original: "/Tokyo-Camii-Halal-Market-3.jpg",
      thumbnail: "/Tokyo-Camii-Halal-Market-3.jpg",
  },],
},
{
  id: 3,
  title: 'HALAL-YA ASAKUSA',
  img: '/unnamed.jpg',
  location: "Taito City",
  url: "https://maps.app.goo.gl/7HGoh4hSj55pCxrW7",
  address: "2 Chome-10-8 Hyakunincho, Shinjuku City",
  map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9847505771136!2d139.69709497523544!3d35.701992872580554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2f1a9ae45d%3A0x3408be2283e077fe!2sNasco%20Halal%20food!5e0!3m2!1sen!2suk!4v1744563057859!5m2!1sen!2suk",
  description: "",
  images: [{
    original: "/unnamed1.jpg",
    thumbnail: "/unnamed1.jpg",
},
{
    original: "/unnamed (7).jpg",
    thumbnail: "/unnamed (7).jpg",
},
{
    original: "/unnamed (8).jpg",
    thumbnail: "/unnamed (8).jpg",
},
{
    original: "/unnamed (9).jpg",
    thumbnail: "/unnamed (9).jpg",
},
{
    original: "/unnamed (10).jpg",
    thumbnail: "/unnamed (10).jpg",
},
{
    original: "/2024-10-07.jpg",
    thumbnail: "/2024-10-07.jpg",
},],
},

{
  id: 4,
  title: 'Nasco Halal Food',
  img: '/2025-03-10.jpg',
  location: "Shinjuku City",
  url: "https://maps.app.goo.gl/7HGoh4hSj55pCxrW7",
  address: "2 Chome-10-8 Hyakunincho, Shinjuku City",
  map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9847505771136!2d139.69709497523544!3d35.701992872580554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2f1a9ae45d%3A0x3408be2283e077fe!2sNasco%20Halal%20food!5e0!3m2!1sen!2suk!4v1744563057859!5m2!1sen!2suk",
  description: "",
  images: [{
    original: "/unnamed1.jpg",
    thumbnail: "/unnamed1.jpg",
},
{
    original: "/unnamed (7).jpg",
    thumbnail: "/unnamed (7).jpg",
},
{
    original: "/unnamed (8).jpg",
    thumbnail: "/unnamed (8).jpg",
},
{
    original: "/unnamed (9).jpg",
    thumbnail: "/unnamed (9).jpg",
},
{
    original: "/unnamed (10).jpg",
    thumbnail: "/unnamed (10).jpg",
},
{
    original: "/2024-10-07.jpg",
    thumbnail: "/2024-10-07.jpg",
},],
},
{ id: 5,
  title: 'Silk Road Market',
  img: '/2021-01-23.jpg',
  location: "Nagoya",
},
{ 
  id: 6,
  title: 'Jannat Halal Market',
  img: '/2019-07-26.jpg',
  location: "Shinjuku City",
}
]

export default function Stores(){
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/store/${id}`);
    }
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        vertical: true,
        arrows: true,
       

        beforeChange: function(currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
          },
          afterChange: function(currentSlide) {
            console.log("after change", currentSlide);
          }
      };
    
    return(<>
    <h1>Stores</h1>
    <Slider {...settings}>
    {data.map((item)=> (<section>
            <div className="Card">
            <div className ="CardImage">
                    <img src={item.img} onClick={()=> handleClick(item.id)}></img>
                </div>
                <p>{item.title}</p>
                <div className = "buttons">
                <button>{item.location}</button>
              </div>
            </div>
    
        </section>) )}
    </Slider>
    </>)
   
}
