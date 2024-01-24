import React from 'react'
import img from '../../assets/1990.jpg'

const Footer = () => {
    return (
    <div className='flex justify-between rounded-lg items-center shadow-xl w-full my-4 p-6'>
        <div className='flex justify-center items-center gap-6'>

            <div className='flex flex-col'>
                <p>Resturant INFORMATION</p>
                <div className='flex justify-between gap-4'>
                    <img src={img} alt='' className="w-24 h-24 object-cover rounded-xl"/>
                    <div>
                        <p>Elenor</p>
                        <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl text-white'>VIP Ticket Holder</button>
                    </div>
                </div>
            </div>

            <button className='p-4 bg-red-400 rounded-lg text-white font-bold'>UnLink</button>
        </div>



        <div className='flex flex-col gap-2 justify-start items-start'>
            <div className='flex items-center justify-start gap-5'>
            <p>Select Avalible Promo to Apply</p>
            <p className='text-sm'>(LIMITED 1 PRE ORDER)</p>
            </div>
            <div className='flex gap-5'>
            <button className='p-4 bg-white rounded-lg border-solid border-2 border-red-600 font-bold'>$5 off any Item</button>
            <button className='p-4 bg-gray-300 rounded-lg  '>Free Beverage</button>
            <button className='p-4 bg-gray-300 rounded-lg  '>$20 off Entire order</button>
            </div>
        </div>


        
    </div>
    )
}

export default Footer
