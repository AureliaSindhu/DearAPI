"use client";

import React, { useState } from 'react';
import Greeting from '@/components/Greeting';
import Footer from '@/components/Footer';
import GettingStarted from '@/components/GettingStarted';
import DearAPI from '@/components/DearAPI';

export default function Home() {
  const [showGettingStarted, setShowGettingStarted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-950 p-20">
      <DearAPI />
      { !showGettingStarted ? (
        <Greeting onGetStarted={() => setShowGettingStarted(true)} />
      ) : (
        <GettingStarted />
      )}
      <Footer />
    </div>
  );
}