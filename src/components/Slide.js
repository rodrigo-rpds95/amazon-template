import { useState } from 'react'
import './Slide.css';

const Slide = ({items}) => {

    const [scrollSlide, setScrollSlide] = useState(0);
    const [slideShow, setSlideShow] = useState(1);
    const [hiddenLeftArrow, setHiddenLeftArrow] = useState(true);
    const [hiddenRightArrow, setHiddenRightArrow] = useState(false);

    const scrolltSlideToLeft = () => {

        let x = scrollSlide + document.querySelector('.slide-container').clientWidth;
        if(x >= 0){
            x = 0;
            setHiddenLeftArrow(true);
        }

        setHiddenRightArrow(false);

        setSlideShow(slideShow - 1);

        setScrollSlide(x);

    }

    const scrolltSlideToRight = () => {

        let x = 0;

        x = scrollSlide - document.querySelector('.slide-container').clientWidth;
        setScrollSlide(x);

        setHiddenLeftArrow(false);

        setSlideShow(slide => {

            if((slide + 1) === items.length){

                setHiddenRightArrow(true);
            }

            return (slide + 1);

        });
        
    }

    return (
        <div className="slide-container">
            <span className="slide-arrow slide-arrow-left" style={{display: hiddenLeftArrow ? 'none' : 'block'}} onClick={scrolltSlideToLeft}></span>
            <span className="slide-arrow slide-arrow-right" style={{display: hiddenRightArrow ? 'none' : 'block'}} onClick={scrolltSlideToRight}></span>
            <div className="slide-row" style={{transform: `translateX(${scrollSlide}px)`}}>
                {items.length > 0 && items.map((image, key) => (
                    <div className="slide-image" key={key}>
                        <img src={image} alt={'Imagem-' + key} />
                    </div>
                ))}
            </div>
            <div className="slide-dots">
                {items.length > 0 && items.map((dot, key) => (
                    <span className={`dot ${(key + 1) === slideShow ? 'active' : ''}`} key={key}></span>
                ))}
            </div>
        </div>
    )
}

export default Slide;