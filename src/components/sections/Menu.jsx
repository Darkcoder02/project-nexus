import React from 'react'
import DishCard from '../ui/DishCard'

function Menu() {
  return (
    <div className='min-h-screen bg-black flex flex-col justify-center items-center lg:px-16 px-4'>
        <h1 className='text-5xl font-semibold text-center lg:pt-8 pt-24 pb-10 text-white'>Featured Menu</h1>
        <div className='flex flex-wrap gap-8 justify-center'>
            <DishCard img={'https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg'} title={'Featured Food'} price={"₹499"}/>
            <DishCard img={'https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg'} title={'Featured Food'} price={"₹499"}/>
            <DishCard img={'https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg'} title={'Featured Food'} price={"₹499"}/>
        </div>
    </div>
  )
}

export default Menu