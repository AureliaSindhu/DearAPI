"use client";

import React from 'react';
import Link from 'next/link';

const GettingStarted: React.FC = () => {
    return (
        <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-black">
            <h1 className="font-zodiak font-semibold text-xl mb-6">A Little Note</h1>
            <div className="font-mono text-sm">
                <p className="mb-3 leading-relaxed">
                    So this is how it works yall,
                </p>
                <p className="mb-3 leading-relaxed">
                    After reading this, you will need to fill your partner&apos;s name and the letter you wanna say to her (e.g. dinner invite) and then this web will give u a cuter format 💕 that you can send to your SO (significant other). ⚠️ Please write it genuinely yall, NO AI PLEASE!! 
                </p>
                <p className="mb-2 leading-relaxed">
                    and you&apos;re welcome! 
                </p>
                <p> 
                    - aacode
                </p>
            </div>
            <div className="mt-4 font-poppins">
                <Link href="/letter" className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded">
                    Start
                </Link>
            </div>
        </div>
    );
};

export default GettingStarted;
