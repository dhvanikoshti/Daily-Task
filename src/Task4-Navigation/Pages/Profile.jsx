import React from 'react'
import { UserContext } from '../../App'
import { useContext } from 'react'

function Profile() {
const {str} = useContext(UserContext);
  return (
    <div><h1 className='text-6xl text-center m-50 font-extrabold'>My Name is {str}</h1></div>

  )
}

export default Profile