import React from 'react'
import ReviewCard from '../ui/ReviewCard'

function Review() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center md:px-16 px-4">
        <h1 className="text-5xl font-semibold text-center text-white lg:pt-16 pt-24 pb-10">Customer Reviews</h1>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
            <ReviewCard img={'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'} name="John Doe"/>
            <ReviewCard img={'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'} name="John Doe"/>
            <ReviewCard img={'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'} name="John Doe"/>
        </div>
    </div>
  )
}

export default Review;