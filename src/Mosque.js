import './Mosques.css'
export default function Mosque(prop){
    return(<section>
        <div className = "embla__slide">
            <div className = "MosqueContainer">
           
            <div class="MosqueImg"><img src = {prop.img.src}  alt={prop.img.alt}  ></img></div>
            <h1>{prop.Name}</h1>
            <p>{prop.Info}</p>
            <p>Location:  {prop.location} </p>
            
            <a href={prop.link} target="_blank">Learn More</a>
            <a href={prop.map} target="-blank">Directions</a>
             
            </div>
        </div>
            
            


    
    
    </section>)

}