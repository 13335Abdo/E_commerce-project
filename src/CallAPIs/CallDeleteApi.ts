import { AddToCartResponse } from '@/types'
import fun from '@/utils/fun'
import React from 'react'

export default async function CallDeleteApi(productId:string):Promise<AddToCartResponse> {


    const token =await fun()

    const res =await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,{
        method:"DELETE",
        headers:{
                token : token as string
            }

    })
    const data = await res.json()
  return data
}



