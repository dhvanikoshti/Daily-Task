import React, { useState } from 'react'

function Conditional_render() {
  const arr = [3, 6, 2, 78, 54, 54, 69]
  const [result, setresult] = useState([])
  function logical() {
    const result1 = arr.map((data) => {
      return data % 2 === 0 && (<h2>Even Element : {data}</h2>)
    })
    setresult(result1)
  }

  function ternary() {
    const result1 = arr.map((data) => {
      return (
        (data % 2 === 0) ? <h1>{data}- Even number</h1> : <h1>{data}- Odd number</h1>
      )
    })
    setresult(result1)
  }

  return (
    <>
      <div className='text-center text-5xl font-bold m-4 underline'><h1>Conditional Rendering</h1></div>
      <div className='m-5'>
        <div className='text-3xl'><p>Array Elements : 3,6,2,78,54,54,69</p></div>
        <div className=''>
          <button className='bg-gray-300 p-2 rounded-xl mx-3 my-5 px-4' type='button' onClick={logical}>Logical &&</button>
          <button className='bg-gray-300 p-2 rounded-xl mx-3 px-7' type='button' onClick={ternary}>Ternary</button>
        </div>
        <div className=''>
          {result}
        </div>
      </div>
    </>
  )
}

export default Conditional_render