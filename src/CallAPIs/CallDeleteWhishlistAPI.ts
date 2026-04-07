import fun from '@/utils/fun'
import React from 'react'

export default async function CallDeleteWhishlistAPI(productId:string) {

    const token =await fun()
    
        const res =await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
            method:"DELETE",
            headers:{
                    token : token as string
                }
    
        })
        const data = await res.json()
        console.log("fffff",data);
        


      return data


}
