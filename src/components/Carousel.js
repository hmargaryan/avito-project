import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Carousel = (props) => {
    const [currentImage, setCurrentImage] = useState(props.images[0]);
    const [activeImage, setActiveImage] = useState(0);

    const handleSetClick = (event) => {
        // Используется унарный оператор, так как аттрибут принимается в виде строки
        setCurrentImage(props.images[+event.target.parentElement.getAttribute('data-quote')]);
        setActiveImage(+event.target.parentElement.getAttribute('data-quote'));
    }

    const handlePrevious = () => {
        if (activeImage === 0) {
            setCurrentImage(props.images[props.images.length - 1]);
            setActiveImage(props.images.length - 1);
        } else {
            setCurrentImage(props.images[activeImage - 1]);
            setActiveImage(activeImage - 1);
        }
    }

    const handleNext = () => {
        if (activeImage === props.images.length - 1) {
            setCurrentImage(props.images[0]);
            setActiveImage(0);
        } else {
            setCurrentImage(props.images[activeImage + 1]);
            setActiveImage(activeImage + 1);
        }
    }

    return (
        <div className="carousel__container">
            {
                // Если в массиве всего один url, то выводим просто одну картинку, иначе выводим слайдер
                props.images.length === 1 ? (
                    <img className="single_image image" src={ props.images[0]}  alt="картинка"/>
                ) : (
                    <React.Fragment>
                        <div className="carousel">
                            <FontAwesomeIcon
                                icon={ faCaretLeft }
                                onClick={ handlePrevious }
                                className="control"
                            />
                            <img className="image" src={ currentImage } alt={ activeImage }/>
                            <FontAwesomeIcon
                                icon={ faCaretRight }
                                onClick={ handleNext }
                                className="control"
                            />
                        </div>
                        <div className="dots">
                            {
                                props.images.map((image, index) => {
                                    return (
                                        <FontAwesomeIcon
                                            icon={ faCircle }
                                            onClick={ event => handleSetClick(event) }
                                            data-quote={ index }
                                            key={ index }
                                            className="dot"
                                            style={{ color: `${activeImage === index ? 'black' : 'lightgray'}` }}
                                        />
                                    )
                                })
                            }
                        </div>
                    </React.Fragment>
                )
            }
        </div>
    )
}

export default Carousel;