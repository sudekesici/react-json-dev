import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Card({ card }) {
  const { title, posterURL } = card;

  return (
    <div className='card'>
      <img className='card-image' src={posterURL} alt={title} />
      <div className='title-icon'>
        <h2 className='card-title'>{title}</h2>
        <KeyboardArrowRightIcon />
      </div>
    </div>
  );
}

export default Card;
