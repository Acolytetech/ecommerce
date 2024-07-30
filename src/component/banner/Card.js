import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import icon1 from '../../images/icon/gift.png';
import icon3 from '../../images/icon/luxury.png';
import icon2 from '../../images/icon/happiness.png';
import './Card.css';

function Card() {
  const cardData = [
    { icon: icon1, text: '30 days refund policy' },
    { icon: icon2, text: 'We serve with smile' },
    { icon: icon3, text: 'We serve genuine' },
  ];

  return (
    <div className='card-container p-12'>
      {cardData.map((card, index) => (
        <div key={index} className='card'>
          <div className='card-content'>
            <img src={card.icon} alt={`icon-${index}`} className='card-icon' />
            <h2 className='card-title'>{card.text}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
