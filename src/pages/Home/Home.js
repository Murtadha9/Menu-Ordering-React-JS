


import  { useState } from 'react';
import menuData from '../../menuData';
import Menu from '../../components/Menu/Menu';
import CurrentOrder from '../../components/CurrentOrder/CurrentOrder';
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import './Home.css';

function App() {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (item) => {
    const existingIndex = orderItems.findIndex((orderItem) => orderItem.id === item.id);

    if (existingIndex !== -1) {
      const updatedOrderItems = [...orderItems];
      updatedOrderItems[existingIndex].quantity += 1;
      setOrderItems(updatedOrderItems);
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };

  const clearOrder = (updatedOrder) => {
    setOrderItems(updatedOrder);
  };

  return (

    <div className="main">
      <div className='border-r-4'>
        

        <div className='flex justify-between p-10'>
          <div>
            <h1 className='font-bold text-2xl '>Simons's BBQ Team</h1>
            <p>Locations #ID123</p>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <div className='flex flex-col items-center'>
              <p>Last async</p>
              <div className='flex items-center justify-center'>
              <GoDotFill className='text-green-600' />
              <h1 className='font-bold'>3 mins ago</h1>
              </div>
              
            </div>
            <div className='flex justify-center gap-1 items-center bg-gray-300 rounded-lg px-3 py-2'><HiOutlineQuestionMarkCircle size={30} /> <p className='font-bold'>Help</p></div>
          </div>
        </div>



        <Menu menuData={menuData} onAddToOrder={addToOrder} currentOrder={orderItems} />
      </div>
      <CurrentOrder currentOrder={orderItems} onClearOrder={clearOrder} />
    </div>
  );
}

export default App;