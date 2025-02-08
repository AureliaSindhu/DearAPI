import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="font-poppins w-full text-center text-gray-400 p-4">
            <p>
                made with several cups of americano, love{' '}
                <a
                    href="https://www.instagram.com/aacodee/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong> aacode</strong>
                </a>
            </p>
        </footer>
    );
};

export default Footer;
