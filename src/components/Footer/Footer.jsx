import React from 'react';
import img from '../../assets/1990.jpg';

const Footer = () => {
    return (
    <div className='flex justify-between  md:flex-col rounded-lg items-center shadow-xl w-full my-4 p-6'>

      {/* Restaurant Information */}
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-4'>
        <img src={img} alt='' className="w-24 h-24 object-cover rounded-xl md:w-32 md:h-32" />
        <p>Eleanor</p>

        <div className='flex flex-col'>
            <p className="text-lg underline pb-2 md:text-base">Restaurant INFORMATION</p>
            <div className='flex items-center justify-between gap-2 md:gap-4'>
                <button className='p-1 md:p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white'>VIP Ticket Holder</button>
            </div>
        </div>
        </div>



      {/* Promo Section */}
        <div className='flex flex-col md:flex-row gap-2 md:items-center'>
        <div className='flex items-center justify-start gap-2 md:justify-start'>
            <p className="text-sm md:text-base">Select Available Promo to Apply</p>

        </div>

        <div className='flex flex-wrap gap-2 pt-2 md:gap-5'>
            <button className='p-2 md:p-4 bg-white rounded-lg border-solid border-2 border-red-600 font-bold'>$5 off any Item</button>
            <button className='p-2 md:p-4 bg-gray-300 rounded-lg'>Free Beverage</button>
            <button className='p-2 md:p-4 bg-gray-300 rounded-lg'>$20 off Entire order</button>
        </div>
        </div>
    </div>
    );
}

export default Footer;
