import React from 'react';
import image from '../../images/Artboard 6 (1).png';
import './Whovr.css'; // Import the CSS file

function Whovr() {
  return (
    <div className='whovr-container'>
      <div className='whovr-content'>
        <div className='whovr-image'>
          <img src={image} alt='Who We Are' />
        </div>
        <div className='whovr-text'>
          <h1 className='whovr-heading'>Who We Are?</h1>
          <p className='whovr-paragraph text-white'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whovr;
