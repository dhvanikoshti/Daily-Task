import React from 'react'

function Home(props) {
  return (
    <div className='text-3xl text-center bold italic text-amber-900 mt-20'>Good Morning !!
    <p>{props.a}{props.str}</p>
    </div>
  )
}

export default Home