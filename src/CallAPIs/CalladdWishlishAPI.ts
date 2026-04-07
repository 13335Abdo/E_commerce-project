import fun from '@/utils/fun'
import React from 'react'
export interface productIdType {
    productId: string
}
export default async function CalladdWishlishAPI(id: string): Promise<productIdType> {

    const token = await fun()


    const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist",{
            method:"POST",
            body:JSON.stringify({
                productId : id as string
            }),

            headers:{
                "Content-Type":"application/json",
                token : token as string
            }




        })

  const finalData = await res.json();
  console.log("finalData", finalData);
    


    return finalData

}




