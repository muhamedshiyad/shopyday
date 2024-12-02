import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance'
import { useFetch } from '../../hooks/useFetch'

export const ProductDetailsPage = () => {
  const {id} = useParams()

  const [ProductDetails,isLoading,error]=useFetch(`/product//details/${id}`)

  return <div>
    <div>
      <h1>{ProductDetails?.title}</h1>
    </div>
    <div>
      <img src={ProductDetails?.image} alt="" />
    </div>
  </div>
}
