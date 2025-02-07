"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Greeting() {
    return (
        <motion.div
        initial={{ opacity: 0, y: -20 }}        
        animate={{ opacity: 1, y: 0 }}           
        transition={{ duration: 0.5 }}         
        className="greeting-container bg-gradient-to-br from-pink-100 to-red-100 p-8 rounded-xl max-w-[600px] mx-auto text-rose-800 flex flex-col items-center justify-center text-center shadow-lg"
        >
        <h2 className="text-3xl font-bold mb-4">
            Hi there, Welcome to <span className="italic">Dear API</span> !
        </h2>
        <p className="text-lg">
            As you're here, so you're almost in trouble—but luckily, I can help.
            So, let's get started!
        </p>
        <button
            className="greeting-button bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-full px-8 py-3 mt-4 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50"
            onClick={() => (window.location.href = '/setup')}
        >
            Get Started
        </button>
        </motion.div>
    );
}

export default Greeting;
