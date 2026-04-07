"use client"
import CallGetLoggedUserWishlistApi from '@/CallAPIs/CallGetLoggedUserWishlistApi';
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart, FaTrash } from 'react-icons/fa6'
import AddProductTocardButton from '../_components/AddProductTocardButton';
import CallDeleteWhishlistAPI from '@/CallAPIs/CallDeleteWhishlistAPI';
import DeleteWishlistButton from '../_components/DeleteWishlistButton';
import { useContext } from 'react';
import { finalContext } from '../_contexts/Ncontext';

export default function page() {


const {setNavWishNo , setWishProdects ,Wishprodect} =  useContext(finalContext)
    async function handleDelete(id:string)
    {
        const response = await CallDeleteWhishlistAPI(id)
        setNavWishNo(response.data.length)
        console.log("responsedddd",response);
        setWishProdects(response.data)
    }





    return (
        <>
            <div className='w-full flex justify-center my-5 px-10 flex-col gap-5'>
                <div className='flex  gap-1'>
                    <Link className=' opacity-50 hover:opacity-100 text-[14px] font-medium' href={"/home"}>Home </Link>
                    <p className='font-medium text-[14px]'> / wishlist</p>
                </div>
                <div className='flex justify-between items-center'>

                    <div className='flex items-center gap-3'>
                        <div className='text-red-500 bg-[#FEF2F2] w-14 h-14 flex items-center justify-center rounded-xl'>

                            <FaHeart className='w-[31.52783203125px] h-[24.84450912475586px]' />

                        </div>
                        <div>
                            <p className='text-[30px] font-bold text-[#101828]'>My Wishlist</p>
                            <p className='text-[14px] font-medium text-[#6A7282]'>5 items saved</p>

                        </div>
                    </div>

                    <Link className='text-red-500 text-[14px] font-medium' href={"/home"}>Continue Shopping </Link>
                </div>
            </div>


            <div className=' my-5 px-10 '>
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="overflow-x-auto border rounded-2xl">
                        <table className="w-full table-auto text-sm">
                            <thead>
                                <tr className="border-b bg-gray-100">
                                    <th className="text-left px-4 py-2">Product</th>
                                    <th className="text-left px-4 py-2">Price</th>
                                    <th className="text-left px-4 py-2">Status</th>
                                    <th className="text-center px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Wishprodect.map((product, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-50 transition-all">
                                        <td className="px-4 py-3 flex items-center gap-3">
                                            <img src={product.imageCover} alt={product.title} className="w-12 h-12 rounded-md object-cover" />
                                            <span>{product.title}</span>
                                        </td>
                                        <td className="px-4 py-3">{product.price} EGP</td>
                                        <td className="px-4 py-3">
                                            <span className="text-green-700 bg-[#F0FDF4] rounded-xl px-2">in stock</span>
                                        </td>
                                        <td className="px-4 py-3 flex justify-end gap-3">
                                            <AddProductTocardButton id={product.id} />
                                            <button onClick={()=>handleDelete(product.id)} className="text-red-600 cursor-pointer hover:text-red-800">
                                                                                            <FaTrash size={20} />
                                                                                        </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>


        </>
    )
}
