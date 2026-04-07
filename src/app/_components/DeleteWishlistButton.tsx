"use client"
import CallDeleteWhishlistAPI from '@/CallAPIs/CallDeleteWhishlistAPI'
import React, { useContext } from 'react'
import { FaTrash } from 'react-icons/fa6'
import { finalContext } from '../_contexts/Ncontext'

export default function DeleteWishlistButton({product}) {
    const {setNavWishNo , setWishProdects} =  useContext(finalContext)
    async function handleDelete(product:string)
    {
        const response = await CallDeleteWhishlistAPI(product)
        setNavWishNo(response.data.length)
        console.log("responsedddd",response);

        // setWishProdects(response.data)


    }
  return <button onClick={()=>handleDelete(product)} className="text-red-600 cursor-pointer hover:text-red-800">
                                                <FaTrash size={20} />
                                            </button>
}
