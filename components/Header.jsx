import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);



  return (
    <div 
      className="
         h-16 flex flex-row items-center
        py-2 px-4 md:px-8
        w-full border-blue-400 flex flex-col md:flex-row items-center justify-between
      "
      style={{
        backgroundImage: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        width: '100vw',
        height: 'auto',
      }}
    >
        
        
          {/* {categories.map((category, index) => (
            category.name != 'Support' && (
            <Link key={index} href={`/category/${category.slug}`}><span className="rounded-full px-5 bg-yellow-50 border-yellow-400 md:float-right mt-2 align-middle text-yellow-500 ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
            )))} */}  
            <Link href="/">
                <span 
                  className="header-text animate-glow cursor-pointer font-bold text-4xl text-white hover:text-gray-300 transition duration-300 ease-in-out"
                >
                  Becca and Matt
                </span>
            </Link>

            {/* search bar with magnify glass icon */}
            {/* <div className="flex flex-row items-center justify-center md:justify-end w-full"> */}
              <div className="relative text-gray-600">
                <input 
                  type="search" 
                  name="search" 
                  placeholder="Search" 
                  className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(
                    e.target.value.replace(/\s+/g, '+').toLowerCase()
                  )}
                />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4"
                  onClick={() => {
                    window.location.href = `/search/${searchTerm}`;
                  }}
                >
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path className="heroicon-ui" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 17 9.5 6.5 6.5 0 1 0 9.5 17c1.68 0 3.22-.65 4.37-1.71l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 9.5 9.5a4.5 4.5 0 0 1-4.5 4.5z"/>
                  </svg>
                </button>
              </div>
            {/* </div> */}

            {/* just the category.name === About */}
            {categories.map((category, index) => (
              category.name === 'About' && (
                <Link key={index} href={`/category/${category.slug}`}><span className="rounded-full px-5 button md:float-right mt-2 align-middle text-yellow-500 ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
              )))}
      
    </div>
  );
};

export default Header;