import React from 'react';
import image from '../../images/Artboard 6 (1).png';

function Whovr() {
  return (
    <div className='container-fluid p-12' style={{ background: 'rgb(51 102 153 / 64%)' }}>
      <h1 className='text-5xl text-white font-bold text-center m-auto'>Who We Are</h1>
      <div className='w-full flex flex-col md:flex-row justify-between m-auto p-14'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={image} alt='' className='mx-auto rounded-3xl' />
        </div>
        <div className='w-full md:w-2/3 text-center md:text-left md:pr-3'>
          <p className='text-xl md:text-3xl ms-0 md:ms-20 text-white leading-loose'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whovr;
