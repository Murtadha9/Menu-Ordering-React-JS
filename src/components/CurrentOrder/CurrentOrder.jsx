
import  { useState, useEffect } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa';
import { CiSettings } from "react-icons/ci";
import Payment from '../Payment/Payment';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CurrentOrder = ({ currentOrder, onClearOrder }) => {
  const navigate = useNavigate();

  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    const updatedItemQuantities = {};

    currentOrder.forEach((item) => {
      updatedItemQuantities[item.id] = item.quantity || 1;
    });

    setItemQuantities(updatedItemQuantities);
  }, [currentOrder]);

  const handleDecrease = (itemId) => {
    setTimeout(() => {
      setItemQuantities((prevQuantities) => {
        const currentQuantity = prevQuantities[itemId] || 1;
        const newQuantity = Math.max(currentQuantity - 1, 0);

        if (newQuantity === 0) {
          delete prevQuantities[itemId];
          onClearOrder(currentOrder.filter((orderItem) => orderItem.id !== itemId));
        } else {
          prevQuantities[itemId] = newQuantity;
        }
        return { ...prevQuantities };
      });
    }, 0);
  };

  const handleIncrease = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

    const subtotal = currentOrder.reduce((total, item) => total + (item.price * (itemQuantities[item.id] || 1)), 0);
    const discount = 5;
    const salesTaxRate = 0.075; 
    const salesTax = subtotal * salesTaxRate;
    const finalPrice = subtotal - discount + salesTax;

  return (
    <div>
      <div className='flex justify-between p-5 items-center'>
        <h2 className='font-bold text-2xl'>Current Order</h2>
        <div className='flex justify-center items-center'>
          <button className=' p-2 rounded-xl bg-pink-200 text-red-600 font-bold' onClick={() => onClearOrder([])}>Clear All</button>
        <div className='p-1 bg-gray-300 rounded-lg m-2'><CiSettings size={30} /></div>
        </div>
      </div>
      {currentOrder.map((item) => {
        const quantity = itemQuantities[item.id];
        if (quantity === 0) {
          return null;
        }

        return (
          <div key={item.id} className="flex items-center justify-between  p-5">
            <img src={item.image} alt={item.name} className="w-16 rounded-xl object-cover" />
            <h3 className="font-bold mb-2">{item.name}</h3>
            <div className='p-2 bg-gray-300 rounded-lg cursor-pointer'><FaMinus onClick={() => handleDecrease(item.id)} /></div>
            <h1 className='font-extrabold'>{quantity}</h1>
            <div className='p-2 bg-gray-300 rounded-lg cursor-pointer'><IoMdAdd onClick={() => handleIncrease(item.id)} /></div>
            <p className="font-semibold">${item.price * quantity}</p>
          </div>
        );
      })}


      <div className="flex flex-col gap-1 justify-evenly m-5 p-4 bg-gray-300 rounded-xl shadow-2xl ">
        <div className='flex justify-between font-bold'><p>Subtotal:</p><p>${subtotal.toFixed(2)}</p></div>
        <div className='flex justify-between font-bold'><p>Discount:</p><p>${discount.toFixed(2)}</p></div>
        <div className='flex justify-between font-bold'><p>Sales Tax:</p><p>${salesTax.toFixed(2)}</p></div>
        <hr className=' my-2 border-gray-500'/>
        <div className='flex justify-between font-bold '><p className='text-lg'>Total:</p><p>${finalPrice.toFixed(2)}</p></div> 
      </div>


      <div className="flex flex-col justify-evenly m-5 p-4 bg-gray-300 rounded-xl shadow-2xl w-80 ">
        <div className='flex justify-between font-bold'><p>Available :</p> <p className='text-orange-500 font-extrabold text-lg underline'>$ 200</p></div>
      </div>

      <button
        className="m-5 p-4 w-80 bg-orange-500 text-white font-bold text-lg rounded-xl"
        onClick={() =>
          navigate('/payment', {
            state: {
              total: finalPrice.toFixed(2),
              available: 200, 
            },
          })
        }
      >
        CheckOut
      </button>
    </div>
  );
};

export default CurrentOrder;