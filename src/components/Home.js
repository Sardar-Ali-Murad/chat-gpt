import React from 'react'
import people from "../assets/people.png"
import "./Home.css"
// import robot from "../assets/ai.png"
// import altas from "../assets/atlassian.png"
// import google from "../assets/google.png"
// // import slack from "../assets/slack.png"
// import dropbox from "../assets/dropbox.png"

import {atlassian,dropbox,robot,google,slack} from "../assets/index"


const Home = () => {
  return (
    <div className='home__Main section__padding div-center-80'>
       <div className='home__Section1'>
         <div className='home__Section11'>
           <h1 className='h__Sans'>
             Lets Build Something Amazing with GPT-3
             OpenAI
           </h1>

           <p className='p__Cormorant'>
           Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
           </p>

           <div className='search__Form'>
            <input placeholder='your Email Here'/>
            <button className='roboto' style={{padding:"10.3px"}}>Get Started</button>
           </div>
          <img src={people}/>

         </div>

         <div className='home__Section12'>
           {/* <img src={robot} height={250}/> */}
         </div>
       </div>

       <div className='home__Section2 main-div-margins'>
          <img src={atlassian}/>
          <img src={google}/>
          <img src={slack}/> 
         <img src={atlassian}/> 
       </div>
    </div>
  )
}

export default Home