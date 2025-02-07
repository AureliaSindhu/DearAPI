import React from 'react';
import ValentineForm from '@/components/ValentineForm';
import Footer from '@/components/Footer';

const LetterPage: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-rose-950 p-10">
            <h1 className="text-3xl font-zodiak italic font-bold text-rose-100 fixed top-0 w-full text-center bg-pink-950 p-4 z-10">
                Dear API
            </h1>

            <ValentineForm />
            <Footer />
        </div>
    );
};

export default LetterPage;