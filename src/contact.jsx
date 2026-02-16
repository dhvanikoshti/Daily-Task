import React from 'react'
import { useContext } from 'react'
import { UserContext } from './App.jsx'

function contact() {
    const {str} = useContext(UserContext);
  return (
    <div>This is my contact page {str}</div>
  )
}

export default contact