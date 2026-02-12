import React from 'react'
import Task2_Component from './Task2_component'

function Task2(){
    return(
        <>
        <div className='p-2 py-20 min-h-screen '>
           <div className='text-sm sm:text-3xl md:text-4xl font-bold text-orange-950 text-shadow-lg/40 text-center p-4'>
                Image Gallery
            </div>
           <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4'>
            <Task2_Component img="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fHww" heading="Nature"/>
            <Task2_Component img="https://images.unsplash.com/photo-1663869172866-7f13e4977be8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFuaW1hbCUyMHBhbmRhfGVufDB8fDB8fHww" heading="Animal"/>
            <Task2_Component img="https://images.unsplash.com/photo-1505832018823-50331d70d237?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDRrJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" heading="Travel"/>
           </div>
        </div>
        </>

    )
}

export default Task2