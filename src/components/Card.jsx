import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
export default function Card(props) {
  return (
    <div className='border border-rose-600 rounded-md p-4 m-4 grid grid-flow-col space-x-3 max-sm:grid-rows-2'>
      {/* Left */}
      <div>
        <img src={props.image} alt="Image" />
      </div>
      {/* Right */}
      <div>
        {/* Location */}
        <div className='flex flex-row align-top justify-start'><FaLocationDot className='text-[#F55A5A] mt-1' />{props.location} <span className='ml-8 font-light underline'><a href={props.link}>View on Google Maps</a></span></div>
        {/* Title */}
        <div className='text-xl font-extrabold mt-1'>
          {props.title}
        </div>
        {/* Date */}
        <div className='mt-2'>{props.date}</div>
        {/* Content */}
        <div className='mt-2'>
          {props.content}
        </div>
      </div>
    </div>
  )
}
