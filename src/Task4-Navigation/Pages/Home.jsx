import React from 'react'
import ImageData from '/src/Task3/ImageData'

function Home() {
  return (
    <div>
        <ImageData/>
        <div className='text-center p-11 text-xl text-amber-50 font-bold mt-10 bg-blue-950 h-30'>This is bottom section</div>
    </div>
  )
}

export default Home