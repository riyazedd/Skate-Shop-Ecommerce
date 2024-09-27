import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo_white.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const {getTotalCartItems} = useContext(ShopContext);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener to toggle the dynamic island effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={`flex items-center p-5 bg-purple-700 sticky z-10 shadow-lg shadow-purple-500 transition-transform duration-300 ${isScrolled ? 'w-[500px] top-5 left-1/2 transform -translate-x-1/2 rounded-full justify-center bg-opacity-95' : 'w-full top-0 justify-between'}`}>
      {/* Logo */}
      <div className={`h-10 flex items-center gap-3 ${isScrolled ? 'hidden' : 'ml-10'}`}>
        <img src={logo} alt="logo" className='h-full' />
        <p className='text-white font-semibold text-2xl font-[Poppins]'>KickFlip Kingdom</p>
      </div>

      {/* Navigation Links */}
      <ul className='flex gap-6 text-white text-lg font-semibold hover:cursor-pointer'>
        <Link to='/'><li onClick={() => { setMenu("home") }}> HOME {menu === "home" ? <hr /> : <></>}</li></Link>
        <Link to='/boards'><li onClick={() => { setMenu("boards") }}>BOARDS {menu === "boards" ? <hr /> : <></>}</li></Link>
        <Link to='/decks'><li onClick={() => { setMenu("decks") }}>DECKS {menu === "decks" ? <hr /> : <></>}</li></Link>
        <Link to='/wheels'><li onClick={() => { setMenu("wheels") }}>WHEELS {menu === "wheels" ? <hr /> : <></>}</li></Link>
        <Link to='/trucks'><li onClick={() => { setMenu("trucks") }}>TRUCKS {menu === "trucks" ? <hr /> : <></>}</li></Link>
      </ul>

      {/* User & Cart Icons */}
      <div className={`flex gap-5 items-center ${isScrolled ? 'hidden' : 'mr-10 h-10'}`}>
        {/* User Icon and Dropdown */}
        <div 
          className='relative'
          onMouseEnter={() => setUserMenuOpen(true)}
          onMouseLeave={() => setUserMenuOpen(false)}
        >
          <Link to='/' onClick={() => { setMenu("") }}>
            <i className="fa-solid fa-user text-white text-4xl"></i>
          </Link>
          
          {/* Dropdown Menu */}
          {isUserMenuOpen && (
            <div className='absolute top-10 right-0 bg-white text-black p-2 rounded shadow-lg'>
              <Link 
                to='/login' 
                className='block px-4 py-2 hover:bg-gray-200'
                onClick={() => { setMenu(""); setUserMenuOpen(false); }}
              >
                Login
              </Link>
              <Link 
                to='/signup' 
                className='block px-4 py-2 hover:bg-gray-200'
                onClick={() => { setMenu(""); setUserMenuOpen(false); }}
              >
                Signup
              </Link>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to='/cart' onClick={() => { setMenu("") }}>
          <i className="fa-solid fa-cart-shopping text-white text-4xl relative"></i>
          <p className='absolute top-4 right-12 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-white'>{getTotalCartItems()}</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
