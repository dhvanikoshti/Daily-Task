import React from 'react'

function Day2_Task2Component(props) {
  return (
    <div className="flex flex-col items-center ">
        <div className="m-5">
                {<img src={props.img} alt="Image" className=" object-cover border-2 border-gray-400 shadow-md"/>}
        </div>
        <div className=' text-sm font-semibold mt-6'>
            {props.heading}
        </div>
        <div>
           <span className='text-green-700'>Just &#8377;{props.sprice}*  </span>
        </div>
        <div>
            <span className='font-semibold text-xl' >&#8377;{props.price}</span>&nbsp;&nbsp;<span className='line-through text-gray-500'>&#8377;{props.p}</span>
        </div>
    </div>
  )
}

export default Day2_Task2Component