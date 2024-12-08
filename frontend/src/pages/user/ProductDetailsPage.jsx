import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance'
import { useFetch } from '../../hooks/useFetch'
import toast from "react-hot-toast"

export const ProductDetailsPage = () => {
  const {id} = useParams()

  const [ProductDetails,isLoading,error]=useFetch(`/product/details/${id}`)

  const handleAddToCart = async () => {
    try {
        const response = await axiosInstance({
            url: "/cart/add-to-cart",
            data: { productId: ProductDetails?._id },
            method: "POST",
        });
        toast.success("product added to cart");
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "unable to add to cart");
    }
};

  return <div>
    <div>
      <h1>{ProductDetails?.title}</h1>
    </div>
    <div>
      <img src={ProductDetails?.image} alt="" />
    </div>
    <button class="btn  btn-primary btn-outline" onClick={handleAddToCart} >add cart</button>
  </div>
}
