"use server"

import type { AddToCartResponse } from "@/types";
import fun from "@/utils/fun"

export default async function AddProdectAPIServer(
  id: string
): Promise<AddToCartResponse> {

    const token = await fun()


    
        const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart",{
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

  return finalData as AddToCartResponse;
}
