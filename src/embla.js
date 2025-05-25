
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
export default function Embla(){
    const [emblaRef,emblaApi] = useEmblaCarousel({loop: false}, [Autoplay()])

    return(
        <div className = "embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla_slide">Slide 1</div>
                <div className="embla_slide">Slide 2</div>
                <div className="embla_slide">Slide 3</div>
                <div className="embla_slide">Slide 4</div>
            </div>
        </div>
    )
}