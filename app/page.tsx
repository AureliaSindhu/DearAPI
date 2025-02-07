"use client";

import React, { useState } from 'react';
import Greeting from '@/components/Greeting';
import Footer from '@/components/Footer';
import GettingStarted from '@/components/GettingStarted';

export default function Home() {
  const [showGettingStarted, setShowGettingStarted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-950 p-20">
      <h1 className="text-3xl font-zodiak italic font-bold text-rose-100 fixed top-0 w-full text-center bg-pink-950 p-4 z-10">
        Dear API
      </h1>
      { !showGettingStarted ? (
        <Greeting onGetStarted={() => setShowGettingStarted(true)} />
      ) : (
        <GettingStarted />
      )}
      <Footer />
    </div>
  );
}