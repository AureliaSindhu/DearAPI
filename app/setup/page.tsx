"use client";

import React from 'react';
import Link from 'next/link';

const RulesPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-rose-50 p-4">
        <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-black">
            <h1 className="text-2xl font-bold mb-6">A Little Note</h1>
            <p className="mb-4 leading-relaxed">
            So this is how it works yall,
            </p>
            <p className="mb-4 leading-relaxed">
            After reading this instruction you will need to fill your partner's name and the letter you wanna say to her (e.g. dinner invite) and then this web will give u a cuter format that you can send to your SO (significant other).
            </p>
            <p className="mb-4 leading-relaxed">
            And you're welcome 
            </p>
            <p> 
                - Dear API ☕️
            </p>
            <div className="mt-8">
            <Link href="/letter" className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded">
                Start
            </Link>
            </div>
        </div>
        </div>
    );
};

export default RulesPage;
