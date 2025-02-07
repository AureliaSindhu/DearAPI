"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GreetingProps {
    onGetStarted: () => void;
}

export function Greeting({ onGetStarted }: GreetingProps) {
    return (
        <motion.div
        initial={{ opacity: 0, y: -20 }}        
        animate={{ opacity: 1, y: 0 }}           
        transition={{ duration: 0.5 }}         
        className="greeting-container bg-gradient-to-br from-pink-100 to-red-100 p-8 rounded-xl mx-auto text-rose-800 flex flex-col items-center justify-center text-center shadow-lg"
        >
        <h2 className="text-xl font-bold mb-4">
            Welcome to <span className="italic">Dear API</span> !
        </h2>
        <Image src="/doomed.jpg" 
            alt="Love Letter" 
            width={400} 
            height={200} 
            className="rounded-xl"
        />
        <p className="text-md mt-4">
            You&apos;re clearly in trouble right when you click the link to this website, but now worries, I got you! 
        </p>
        <button
            className="greeting-button bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-full px-3 py-1 mt-4 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50"
            onClick={onGetStarted}
        >
            Get Started
        </button>
        </motion.div>
    );
}

export default Greeting;
