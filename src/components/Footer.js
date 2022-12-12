import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer__Main section__padding div-center-80 "  style={{marginTop:"100px",paddingBottom:"20px"}}>
      <div className="footer__Wrapper">

        <div className="footer__Section1">
           <h2 className="h__Sans">
           Do you want to step in to the future before others
           </h2>
           <button className="custom__Btn p__Cormorant">
              Get Started
           </button>
        </div>

        <div className='footer__Section2'> 
           <div className='footer__Section21'>
              <h2 className='h__Cormorant'>
                 GPT-3
              </h2>  
              <p className='p__Cormorant small__Font__H1'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
           </div>

           <div>
             <h3 className='h__Sans'>
               Important Links
             </h3>
                <p className='p__Cormorant'>Counters</p>
                <p className='p__Cormorant'>Social Media</p>
                <p className='p__Cormorant'>Contracts</p>
                <p className='p__Cormorant'>Blogs</p>
                <p className='p__Cormorant'>Blogs</p>
           </div>


           <div>
             <h3 className='h__Sans'>
               Company
             </h3>
                <p className='p__Cormorant'>Counters</p>
                <p className='p__Cormorant'>Social Media</p>
                <p className='p__Cormorant'>Contracts</p>
           </div>



           <div>
             <h3 className='h__Sans'>
               Sponsers
             </h3>
                <p className='p__Cormorant'>Counters</p>
                <p className='p__Cormorant'>Social Media</p>
                <p className='p__Cormorant'>Contracts</p>
                <p className='p__Cormorant'>Blogs</p>
                <p className='p__Cormorant'>Blogs</p>
           </div>


        </div>

        <div className='footer__Section3'>
            <p className='p__Cormorant'>@Copy Right Reserved</p>
        </div>


      </div>
    </div>
  )
}

export default Footer