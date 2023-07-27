import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const handleEmailSignup = async () => {
    e.preventDefault();
    const email = e.target.email.value;
    const res = await addEmailAddress(email);
    console.log(res);
    toast.dark('👋 Thanks for signing up!');
    setShowEmailSignup(false);
  }

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12
      
    '>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Quick Clicks
      </h3>
      {categories.slice(0).reverse().map((category) => (
        category.name != 'Support' && category.name != 'About' && (
          <Link key={category.slug} href={`/category/${category.slug}`} passHref>
            <span className='cursor-pointer block pb-3'>
              {category.name}
            </span>
          </Link>
        )
      ))}
      <div className="flex flex-col p-2 rounded-lg bg-opacity-40
        
      ">
        {/* close button */}
        <button
            className="relative top-0 left-32 h-2 w-0 p-0 mb-2"
            onClick={() => setShowEmailSignup(false)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <h1 className="font-bold mb-4 font-sans">Sign up for our email list</h1>
        
        <form className="flex flex-col " onSubmit={handleEmailSignup}>
            <input 
                className="border-2 border-black p-2 rounded-lg mb-2 w-1/2 self-center" 
                type="text" 
                name="email" 
                placeholder="email"
            />
            <button 
                className="border-2 border-black p-2 rounded-lg mt-2 bg-black text-white w-1/2 self-center"
                type="submit"
            >
                Submit
            </button>
        </form>
      </div>
    </div>
  )
}

export default Categories