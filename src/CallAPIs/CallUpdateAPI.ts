import { AddToCartResponse } from "@/types"
import fun from "@/utils/fun"

export default async function CallUpdateApi(productId:string,count:number):Promise<AddToCartResponse> {


    const token =await fun()

    const res =await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,{
        method:"PUT",
        body:JSON.stringify({count}),
        headers:{
                token : token as string,
                
                "Content-Type":"application/json"
            }

    })
    const data = await res.json()
  return data
}