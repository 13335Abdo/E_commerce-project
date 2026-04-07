import fun from '@/utils/fun';
import React from 'react'

export default async function CallGetLoggedUserWishlistApi() {
    const token = await fun()

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist",{
        headers:{
            token : token as string
        }
    })
   const final = await res.json()
   console.log("finaaaaaaaaaaaaaaaal",final);
   
   return final
}
