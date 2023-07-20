import React, { useState, useEffect } from "react";
import { Header, FeaturedVideoCard } from './'
import { addEmailAddress } from '../services/index'
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Landing = () => {
    const [showEmailSignup, setShowEmailSignup] = useState(false);
    const handleEmailSignup = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const res = await addEmailAddress(email);
        console.log(res);
        toast.dark('👋 Thanks for signing up!');
        setShowEmailSignup(false);
    }

    const renderEmailSignup = () => {
        // create a pop up modal that displays after 5 seconds to sign up for email list
        // if they click submit, then handleEmailSignup

        return (
            <div className="flex flex-col items-center justify-center h-screen w-screen bg-grey bg-opacity-80 rounded-full">
                {/* x button to setShowEmailSignup false */}
                
                
                <div className="flex flex-col items-center justify-center bg-yellow-200 p-2 rounded-lg bg-opacity-40">
                    {/* close button */}
                    <button
                        className="relative top-0 left-32 h-2 w-0 p-0 mb-2"
                        onClick={() => setShowEmailSignup(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <h1 className="text-4xl font-bold mb-4 font-sans text-white">Sign up for our email list</h1>
                   
                    <form onSubmit={handleEmailSignup}>
                        
                        <input 
                            className="border-2 border-black p-2 rounded-lg"
                            type="text" 
                            name="email" 
                            placeholder="email"
                        />
                        <button 
                            className="border-2 border-black p-2 rounded-lg"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    useEffect(() => {
        setTimeout(() => {
            setShowEmailSignup(true);
        }, 5000);
    }, []);
    
    return (
        <div 
            className="bg-cover bg-center h-screen w-screen mb-8 bg-fixed bg-no-repeat bg-main-img"       
        >
            <Header />
            <div className="flex flex-col items-center  h-screen bg-grey bg-opacity-50">
                <h1 className="text-6xl font-bold text-white mt-36 mb-8">
                    Becca & Matt
                </h1>
                <p className="text-white text-xl">
                    <Link href="/category/travel">
                        <a className="hover:underline">Travel</a>
                    </Link>
                    {" "} - {" "}
                    <Link href="/category/tech">
                        <a className="hover:underline">Tech</a>
                    </Link>
                    {" "} - {" "}
                    <Link href="/category/nutrition">
                        <a className="hover:underline">Nutrition</a>
                    </Link>
                    
                </p>
                {showEmailSignup && renderEmailSignup()}
                <div
                    className="absolute bottom-0 w-full flex flex-col items-center"
                >
                    <p className="text-white mb-5 px-4 text-xl text-center">Scroll down for more</p>
                    <div className="arrow-down animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Landing;