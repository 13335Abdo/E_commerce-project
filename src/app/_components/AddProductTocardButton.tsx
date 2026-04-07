"use client"
import { FaPlus } from 'react-icons/fa6'
import AddProdectAPIServer from '../shop/AddProdectAPIServer'
import { toast } from 'sonner'
import { useContext } from 'react'
import { finalContext } from '../_contexts/Ncontext'

export default function AddProductTocardButton({id}:{id:string}) {


    const {setNavCartNo,settotalCartPrice,setProdects} = useContext(finalContext)

    async function handeCallApi()
    {
        const x = await AddProdectAPIServer(id)
        toast.success(x.status, { richColors: true, position: "top-center" })
        setNavCartNo(x.numOfCartItems)
        settotalCartPrice(x.data.totalCartPrice)
        setProdects(x.data.products)

    }


    return (
        <button onClick={handeCallApi} className="flex p-2.5 bg-green-600 rounded-full text-white cursor-pointer">
            <FaPlus />
        </button>
    )
}
