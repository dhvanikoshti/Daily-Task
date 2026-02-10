import React from 'react'
import Task1_Component from './Task1_Component'

function Task1() {
  return (
    <div className=' m-10 md:m-20 border-2 shadow-md border-gray-400 rounded-2xl md:rounded-4xl bg-gray-200'>
        <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-center  m-9  font-serif'>
            Departments
        </div>
        <div className='m-6'>
        <hr className=' border-2 border-gray-600'/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
            <Task1_Component heading="Computer Engineering" content="Computer Engineering is a four year Ungraduate Program introducing its students to realms of computer,introducing the theory and design of Data storage,software,operating system."/>
            <Task1_Component heading="IT Engineering" content="Information Technology is an undergraduate engineering course which focuses on expanding and growing in terms of dissemination of knowledge within and outside curriculum and skill development activities."/>
            <Task1_Component heading="Computer Science" content="Computer Engineering with ML & AI at Silver Oak University is a 4-year undergraduate specialization programme that presents a solid foundation in the principles and technologies to get on the path of an exciting, sprouting career."/>
        </div>
    </div>
  )
}

export default Task1