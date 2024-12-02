import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPages = () => {

    const navigate = useNavigate()

  return (
    <div><h1>404  Not found!</h1>
    <h2 onClick={()=>navigate('/')}>Home</h2>
    </div>
    
  )
}
