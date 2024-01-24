import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';

const Menu = ({ menuData, onAddToOrder, currentOrder }) => {
  const [filteredMenu, setFilteredMenu] = useState(menuData);
  const [categories, setCategories] = useState(['All', ...new Set(menuData.map((item) => item.category))]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleItemClick = (item) => {
    console.log('Clicked on:', item);
    onAddToOrder(item);
  };

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredMenu(menuData);
    } else {
      const filteredItems = menuData.filter((item) => item.category === selectedCategory);
      setFilteredMenu(filteredItems);
    }
  }, [selectedCategory, menuData]);

  return (
    
    <div>
      <div className="cursor-pointer">
  <ul className="flex gap-10 px-10">
    {categories.map((category) => (
      <li
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`cursor-pointer ${
          selectedCategory === category ? 'bg-orange-500 text-white' : ''
        } p-2 rounded-lg font-bold` }
      >
        {category}
      </li>
    ))}
  </ul>
</div>

      <div className='flex flex-wrap m-2 md:m-5 justify-evenly'>
  {filteredMenu.map((item) => (
    <div key={item.id} className="flex relative bg-gray-100 cursor-pointer p-4 w-full md:w-80 rounded-lg overflow-hidden shadow-xl m-2 hover:shadow-2xl" onClick={() => handleItemClick(item)}>
      
      <div className="flex flex-col justify-between gap-4 md:gap-10 w-full">
        <div>
          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-2">{item.description}</p>
        </div>
        <p className="font-bold text-orange-500 text-lg">${item.price}</p>
      </div>

      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl md:w-32 md:h-32 absolute bottom-2 right-2" />

    </div>
  ))}
</div>


      <Footer/>
    </div>
  );
};

export default Menu;