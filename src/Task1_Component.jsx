import React from 'react'



function Task1_Component(props){
    return(
        <>
        <div className="border-2 border-gray-400 bg-white rounded-4xl shadow-md p-8 text-center flex flex-col justify-between">
            <div className='font-extrabold text-lg sm:text-xl  text-center'>{props.heading}</div>
            <div className='mt-2 text-sm  sm:text-base  text-center'>{props.content}</div>
            <div className='mt-4'>
                <button className='hover:bg-gray-400 hover:border-gray-600 bg-gray-300 p-2 pl-4 pr-4 rounded-2xl border-2 border-gray-400'>Apply Now</button>
            </div>

        </div>
        </>
    )
}

export default Task1_Component
