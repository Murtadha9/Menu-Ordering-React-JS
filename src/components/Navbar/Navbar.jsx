import React from 'react';

const Navbar = ({ categories, onSelectCategory }) => {
    return (
        <div className="p-10">
            <ul>
            {categories.map((category) => (
                <li key={category} onClick={() => onSelectCategory(category)}>
                    {category}
                </li>
                ))}
            </ul>
    </div>
    );
};

export default Navbar;