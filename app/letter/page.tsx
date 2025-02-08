import React from 'react';
import ValentineForm from '@/components/ValentineForm';
import Footer from '@/components/Footer';
import DearAPI from '@/components/DearAPI';

const LetterPage: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-rose-950 p-10">
            <DearAPI />
            <ValentineForm />
            <Footer />
        </div>
    );
};

export default LetterPage;