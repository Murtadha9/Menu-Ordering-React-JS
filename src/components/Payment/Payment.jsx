
import React from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import visaimg from '../../assets/visa.png';
import masterimg from '../../assets/master.png';


const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { total, available } = location.state || { total: 0, available: 0 };

  const handleCheckout = () => {
    if (available > total) {
      navigate('/done');
    } else {
      navigate('/cancel');
    }
  };



  return (
    <div className='flex flex-col items-center justify-center gap-8 min-h-screen'>

      <div className='border-2 border-black p-5 m-5 rounded-xl'>
        <h2 className='text-lg font-bold'>Total: ${total}</h2>
        <h2 className='text-lg font-bold'>Available: ${available}</h2>
      </div>
  
      <div className='border-2 border-black lg:border-2 p-4 lg:p-5 m-3 lg:m-5 rounded-md lg:rounded-xl '>
  
      <div className='flex items-center justify-center gap-2 mb-4'>
        <h1 className='text-lg font-bold'>Payment Method</h1>
        <button><img src={visaimg} alt='visa' className='w-10'/></button>
        <button><img src={masterimg} alt='master' className='w-10'/></button>
      </div>
  
      <form className='flex flex-col gap-2 md:gap-4 lg:gap-6'>
  
        <div className='flex flex-col'>
          <label htmlFor="name" className="text-lg">Full Name</label>
          <input type="text" id="name" required className="border-2 rounded-xl border-black p-2" />
        </div>
  
        <div className='flex flex-col'>
          <label htmlFor="cardNo" className="text-lg">Card Number</label>
          <input type="text" id="cardNo" placeholder="2024 2023 2022 2021" className="border-2 rounded-xl border-black p-2" />
        </div>
  
        <div className='flex flex-col'>
          <label htmlFor="CVV" className="text-lg">(CVV)</label>
          <input type="text" id="CVV" placeholder="123" className="border-2 rounded-xl border-black p-2" />
        </div>
  
        <div className='flex flex-col'>
          <label className="text-lg">Expiration Date</label>
          <div className='flex gap-2'>
            <label htmlFor="Month" className="text-lg">Month</label>
            <input type="text" id="Month" placeholder="09" className="border-2 rounded-xl border-black p-2" />
  
            <label htmlFor="Year" className="text-lg">Year</label>
            <input type="text" id="Year" placeholder="2024" className="border-2 rounded-xl border-black p-2" />
          </div>
        </div>
  
        <button onClick={handleCheckout} type="submit" className='bg-green-400 rounded-lg p-3 text-lg font-bold'>Checkout</button>
      </form>
    </div>
  
  </div>
  


  );
};

export default Payment;
