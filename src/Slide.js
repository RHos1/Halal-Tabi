import {useState} from 'react'
const Slide = ({slides}) => {
   
    const sliderStyles = {
        height: "100%",
        position: "relative",
    };
    const[currentIndex, setCurrentIndex] = useState(0);
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "1.2rem",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage : `url(${slides[currentIndex].url})`,
        
    };
    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: "translate(0, -50%)",
        left: "1.4rem",
        fontSize: "4rem",
        fontWeight: "600",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: "translate(0, -50%)",
        right: "1.4rem",
        fontSize: "4rem",
        fontWeight: "600",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",
    }
    const  dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: "4rem",
    }


    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0 
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);

    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

    }
    return <div style = {sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>&#8592;</div>
        <div style={rightArrowStyles} onClick={goToNext}>&#8594;</div>
        <div style = {slideStyles}></div>
        <div style={dotsContainerStyles}>{slides.map((slide, slideIndex) => (
            <div key = {slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>.</div>
        ))}</div>
    </div>

};

export default Slide