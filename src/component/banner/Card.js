import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import icon1 from '../../images/icon/gift.png';
import icon2 from '../../images/icon/luxury.png';
import icon3 from '../../images/icon/happiness.png';

function Card() {
  return (
    <div className='ourcommited px-20  flex w-full bg-gray my-10 text-2xl' style={{width:'100%', height:'200px', justifyContent:'space-between'}}>
        <div className=' text-white  text-center w-2/2 rounded-2xl' style={{display:'flex', flexDirection:'column', justifyContent:'center',boxShadow:'1px 1px 20px 1px black'}}>
        <div className='bg-orange-200 w-2/2 rounded-2xl pt-10' style={{width:'300px',height:'200px', lineHeight:'60px'}}>
        <img src={icon1} alt='refundpolicy' style={{marginRight:'auto' ,marginLeft:'auto'}}/>
        <h2>30 days refund policy</h2>
        </div>
     
        </div>
        <div className=' text-white  text-center w-2/2 rounded-2xl ' style={{display:'flex', flexDirection:'column', justifyContent:'center',boxShadow:'1px 1px 20px 1px black'}}>
        <div className='bg-orange-200 w-2/2 rounded-2xl pt-10 ' style={{width:'300px',height:'200px' ,lineHeight:'60px'}}>
        <img src={icon2} alt='refundpolicy' style={{marginRight:'auto' ,marginLeft:'auto'}}/>
        <h2>We serve with smile</h2>
        </div>
     
        </div>
        <div className=' text-white  text-center w-2/2 rounded-2xl ' style={{display:'flex', flexDirection:'column', justifyContent:'center',boxShadow:'1px 1px 20px 1px black'}}>
        <div className='bg-orange-200 w-2/2 rounded-2xl pt-10' style={{width:'300px',height:'200px', lineHeight:'60px'}}>
        <img src={icon3} alt='refundpolicy' style={{marginRight:'auto' ,marginLeft:'auto'}}/>
        <h2>We serve genuine</h2>
        </div>
     
        </div>
      
    </div>
  )
}

export default Card
