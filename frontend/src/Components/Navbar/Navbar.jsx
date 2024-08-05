import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo_white.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='flex items-center p-5 bg-purple-700 justify-between font-inter font-normal text-lg sticky top-0 z-10 shadow-lg shadow-purple-500'>
      <div className='ml-10 h-10 flex items-center gap-3'>
        <img src={logo} alt="" className='h-full' />
        <p className='text-white font-semibold text-2xl font-[Poppins]'>KickFlip Kingdom</p>
      </div>
      <ul className='flex gap-6 text-white hover:cursor-pointer'>
      <Link to='/'><li onClick={() => { setMenu("home") }}> HOME {menu === "home" ? <hr /> : <></>}</li></Link>
      <Link to='/boards'><li onClick={() => { setMenu("boards") }}>BOARDS {menu === "boards" ? <hr /> : <></>}</li></Link>
        <Link to='/decks'><li onClick={() => { setMenu("decks") }}>DECKS {menu === "decks" ? <hr /> : <></>}</li></Link>
        <Link to='/wheels'><li onClick={() => { setMenu("wheels") }}>WHEELS {menu === "wheels" ? <hr /> : <></>}</li></Link>
        <Link to='/trucks'><li onClick={() => { setMenu("trucks") }}>TRUCKS {menu === "trucks" ? <hr /> : <></>}</li></Link>
      </ul>
      <div className='flex gap-5 items-center mr-10 h-10'>
        <Link to='/login' onClick={() => { setMenu("") }}><button className='border p-3 w-40 rounded-2xl text-white active:bg-purple-900'>Login</button></Link>
        <Link to='/cart' onClick={() => { setMenu("") }}>
          <i className="fa-solid fa-cart-shopping text-white text-4xl relative"></i>
          <p className='absolute top-4 right-12 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-white'>{getTotalCartItems()}</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
