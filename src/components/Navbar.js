import React from 'react'
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {

    let [showNav,setShowNav]=React.useState(false)



    function shownav(){
      setShowNav(true)
    }

    function hidenav(){
      setShowNav(false)
    }


  return (
    <div className='navbar__Main'>
      <nav className='big__Screen__Navbar'>
        <ul className='p__Cormorant'>
        <li><a href="#home">Home</a></li>
          <li><a href='#gpt'>GPT</a></li>
          <li><a href='#case'>Case Study</a></li>
          <li><a href='#library'>Library</a></li>
        </ul>
      </nav>

      <div className='navbar__Buttons'>
         <button className="custom__Btn sign__In ">Sign In</button>
         <button className="custom__Btn">Sign Up</button>
      </div>


  <div className='navbar__Small__Screen'>
    <p onClick={shownav} className='p__Cormorant navbar__Ham'><MenuIcon/></p>


  { showNav && <div className='small__Screen__Navbar__Links'>
        <p onClick={hidenav} className='p__Cormorant navbar__Ham'><CloseIcon/></p>
      <nav>
        <ul className='p__Cormorant'>
          <li><a href="#home" onClick={hidenav} >Home</a></li>
          <li><a href='#gpt' onClick={hidenav}>GPT</a></li>
          <li><a href='#case' onClick={hidenav}>Case Study</a></li>
          <li><a href='#library' onClick={hidenav}>Library</a></li>
        </ul>
      </nav>
    </div>
}


      </div>

    </div>
  )
}

export default Navbar