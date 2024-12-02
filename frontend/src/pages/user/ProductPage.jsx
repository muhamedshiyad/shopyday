import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { ProductCard } from '../../components/user/Card';
import { PostSkelton } from '../../components/shared/Skelton';
import { useFetch } from '../../hooks/useFetch';

export const ProductPage = () => {
  const [products,isLoading,error]=useFetch('/product/product-list')
  console.log('products===',products);
 
  return (
    <div className=' flex gap-6 py-12 px-10'>
      {isLoading ?(
        <PostSkelton/>
        ):(
          <>
          {products?.map((value)=>(
            <ProductCard key={value._id} product={value}/>
          ))}
          </>
        )}
    </div>
  )
}
