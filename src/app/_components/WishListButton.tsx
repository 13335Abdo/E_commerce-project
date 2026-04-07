"use client"
import CalladdWishlishAPI from '@/CallAPIs/CalladdWishlishAPI'
import React, { useContext } from 'react'
import { CiHeart } from 'react-icons/ci'
import { toast } from 'sonner'
import { finalContext } from '../_contexts/Ncontext'

export default function WishListButton({ id }: { id: string }) {

    const { setNavWishNo, setWishProdects } = useContext(finalContext)

    async function handleAddProdectInWishlist() {

        const response = await CalladdWishlishAPI(id)
        console.log();
        

        setWishProdects(response.data)

        setNavWishNo(response.data.length)

    }

    return (
        <button onClick={handleAddProdectInWishlist} className="bg-white p-1 rounded-full hover:text-red-600 font-semibold">

            <CiHeart className="cursor-pointer" />
        </button>
    )
}
