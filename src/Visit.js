export default function Visit(props){
    return(
        <section>
            <div id="Camii-Container">
                <h1>{props.Header}</h1>
                
                    <div class="Camii-Image">
                        <img src={props.image.src} alt={props.image.alt} />
                    </div>
                <a href= {props.href} target="_blank">{props.tag}</a>
                <p>{props.info}</p>
            </div>
        </section>
    )
}