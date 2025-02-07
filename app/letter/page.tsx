import React from 'react';
import ValentineForm from '@/components/ValentineForm';
import Footer from '@/components/Footer';

const LetterPage: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-rose-950">
            <ValentineForm />
            <Footer />
        </div>
    );
};

export default LetterPage;