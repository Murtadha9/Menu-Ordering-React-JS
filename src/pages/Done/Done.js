import React from 'react'
import { MdOutlineDownloadDone } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Done = () => {

  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">

  <div className='flex flex-col items-center justify-center bg-gray-200 w-80 h-80 md:w-96 md:h-96 rounded-full'>
    <MdOutlineDownloadDone className='text-green-500 text-6xl md:text-8xl' />
    <h1 className="text-xl md:text-3xl font-bold mb-4">Done Payment</h1>
  </div>

  <button onClick={handleBackHome} className='text-lg md:text-2xl font-bold underline'>Back Home</button>

</div>
  )
}

export default Done
