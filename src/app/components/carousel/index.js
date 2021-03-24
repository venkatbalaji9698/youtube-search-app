import React, { useState } from 'react';

import Img1 from '../../../assets/images/img1.jpg';
import Img3 from '../../../assets/images/img3.jpg';

import './index.scss';

const CustomCarousel = () => {
    const [lastTab, setLastTab] = useState(3);
    const cardsList = [
        {
            id: 1,
            image: Img1,
            title: 'Card 1'
        },
        {
            id: 2,
            image: Img3,
            title: 'Card 2'
        },
        {
            id: 3,
            image: Img1,
            title: 'Card 3'
        },
        {
            id: 4,
            image: Img3,
            title: 'Card 4'
        },
        {
            id: 5,
            image: Img1,
            title: 'Card 5'
        },
    ];

    const handleLeftClick = () => {
        if (lastTab > cardsList.length - 2) {
            setLastTab(lastTab - 1);
            const ele = document.getElementById(`card-${lastTab - 3}`);
            if (ele) {
                ele.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    const handleRightClick = () => {
        if (lastTab < cardsList.length) {
            setLastTab(lastTab + 1);
            const ele = document.getElementById(`card-${lastTab + 1}`);
            if (ele) {
                ele.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <div className="carousel-container">
            <div className={`carousel-container_arrow left${lastTab === 3 ? ' disable' : ''}`} onClick={handleLeftClick}>&lt;</div>
            <div className="carousel-container__wrapper">
                {cardsList.map(item => {
                    return (
                        <div className="carousel-container_item" id={`card-${item.id}`}>
                            <img src={item.image} />
                            <p className="carousel-container_title">{item.title}</p>
                        </div>
                    )
                })}
            </div>
            <div className={`carousel-container_arrow right${lastTab === cardsList.length ? ' disable' : ''}`} onClick={handleRightClick}>&gt;</div>
        </div>
    );
}

export default CustomCarousel;
