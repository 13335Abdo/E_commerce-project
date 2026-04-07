import React from 'react'
import Allcat from '../_components/Allcat'
import UserOrders from '../_components/UserOrders'
import CallUserOrdersAPI from '@/CallAPIs/CallUserOrdersAPI'


export default async function page() {

  const response = await CallUserOrdersAPI()
  return (
    <>
      <div>


        <div>

          <Allcat isallorder={true} />
        </div>
        <div>
          {response?.map((item)=> <UserOrders key={item._id} item={item}/> )}


        </div>


      </div>



    </>
  )
}
