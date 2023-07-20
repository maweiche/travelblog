import React from "react";
import { Header, FeaturedVideoCard } from './'
const Landing = () => {

    return (
        <div 
            style={{
                backgroundImage: "url('bg.png')",
                // image cover
                backgroundSize: "cover",
            }}
            className="bg-cover bg-center h-screen w-screen mb-8"
            
        >
            <Header />
            <div className="flex flex-col items-center  h-screen bg-grey bg-opacity-50">
                <h1 className="text-6xl font-bold text-white mt-36 mb">
                    Becca & Matt
                </h1>
                <p className="text-white text-xl">
                    Travel - Tech - Nutrition
                </p>
            </div>
        </div>
    );
}

export default Landing;