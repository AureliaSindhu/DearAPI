import React from "react";
import { getLetter } from "../../../lib/letters";

interface PageProps {
    params: { id: string };
}

const LetterPage: React.FC<PageProps> = ({ params }) => {
    const letter = getLetter(params.id);

    if (!letter) {
        return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl text-gray-700">Letter not found.</p>
        </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-rose-50 p-4">
        <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-black">
            <h1 className="text-2xl font-bold mb-6">Your Love Letter</h1>
            <p className="mb-4">
            <strong>To My Valentine:</strong> {letter.recipient}
            </p>
            <p className="mb-4">
            <strong>Your Lovely Message:</strong> {letter.message}
            </p>
            <p className="text-gray-500 text-sm">
            Created at: {new Date(letter.createdAt).toLocaleString()}
            </p>
        </div>
        </div>
    );
};

export default LetterPage;
