import React from 'react'

function Section1coins({coins}) {
  return (
    <>
   
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-w-[80vw] text-white mx-auto '> 
        {
            coins.slice(0,4).map((coin)=>(
                <div key={coin.name} className='flex flex-col  gap-1 justify-center items-center m-4'>
                 <div ><img src={coin.image} alt="" className='w-20' /></div>
                 <div className='text-[1.3rem] font-bold'>{coin.name} <span className={`${coin.price_change_percentage_24h <= 0 ? "text-red-500" : "text-green-500"}`}>{coin.price_change_percentage_24h}%</span></div>
                 <div className='text-[1.2rem] font-bold'>$ {coin.current_price}</div>
                </div>
            ))
        }
    </div>
    
    </>
  )
}

export default Section1coins