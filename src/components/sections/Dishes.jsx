import React from 'react'
import DishCard from '../ui/DishCard'

function Dishes() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-16 px-4 bg-black'>
        <h1 className='text-5xl font-semibold text-center pt-24 pb-10 text-white'>Features Dishes</h1>
        <div className='flex flex-wrap gap-5 justify-center'>
            <DishCard img={'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574'} title="Famous Dish" price="₹199"/>
            <DishCard img={'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574'} title="Famous Dish" price="₹199"/>
            <DishCard img={'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574'} title="Famous Dish" price="₹199"/>
            <DishCard img={'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574'} title="Famous Dish" price="₹199"/>
            <DishCard img={'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574'} title="Famous Dish" price="₹199"/>
            <DishCard img={'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574'} title="Famous Dish" price="₹199"/>
        </div>
    </div>
  )
}

export default Dishes