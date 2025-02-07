"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useParams, useSearchParams } from 'next/navigation';
import Footer from '@/components/Footer';
import confetti from 'canvas-confetti';
import DearAPI from '@/components/DearAPI';

interface Letter {
    id: string;
    recipient: string;
    message: string;
    createdAt: string;
}

export default function LetterPage() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const { id } = useParams();
    console.log("Fetched id:", id);

    const searchParams = useSearchParams();
    const isShared = searchParams.has("shared");

    /* eslint-disable @typescript-eslint/no-explicit-any */

    // const [letter, setLetter] = React.useState<any>(null);
    // const [loading, setLoading] = React.useState(true);
    // const [copied, setCopied] = React.useState(false);
    // const [noClicked, setNoClicked] = React.useState(false);

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const [letter, setLetter] = React.useState<Letter | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [copied, setCopied] = React.useState<boolean>(false);
    const [noClicked, setNoClicked] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!id) {
            return;
        }
        const fetchLetter = async () => {
            const res = await fetch(`/api/letters/${id}`);
            if (res.ok) {
                const data = await res.json();
                //setLetter(data);
                setLetter(data as Letter);
            }
            setLoading(false);
        };
        fetchLetter();
    }, [id]);

    const handleCopyLink = async () => {
        try {
            const url = new URL(window.location.href);
            url.searchParams.set("shared", "true");

            await navigator.clipboard.writeText(url.toString());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy link', error);
        }
    };

    const handleYesClick = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-rose-950">
                <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                    <HeartIcon className="w-12 h-12 text-rose-200" />
                </motion.div>
            </div>
        );
    }

    if (!letter) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-rose-950">
                <p className="font-zodiak italic text-xl text-rose-200">Letter not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-rose-950 p-4">
            <DearAPI />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full"
            >
                <Card className="border-rose-200 bg-rose-50 font-zodiak">
                <CardHeader>
                    <CardTitle className="font-zodiak italic text-2xl font-bold text-rose-800 text-center">
                    My dearest Valentine
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    >
                    <p className="text-lg">
                        <span className="font-zodiak italic text-rose-700">Dear {letter.recipient}, </span>
                    </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    >
                    <p className="font-zodiak text-rose-900 italic">{letter.message}</p>
                    </motion.div>
                </CardContent>
                <CardFooter className="flex flex-col items-center space-y-4">
                    <div className="flex space-x-4">
                    {!noClicked && (
                        <Button
                        variant="default"
                        className="bg-rose-600 hover:bg-rose-700"
                        onClick={() => setNoClicked(true)}
                        >
                        NO!
                        </Button>
                    )}
                    <Button
                        variant="outline"
                        className="border-rose-600 text-rose-600 hover:bg-rose-100 hover:text-rose-900"
                        onClick={handleYesClick}
                    >
                        YES!
                    </Button>
                    </div>
                    {!isShared && (
                    <Button variant="outline" onClick={handleCopyLink}>
                        {copied ? "Link Copied!" : "Share Link"}
                    </Button>
                    )}
                </CardFooter>
                </Card>
            </motion.div>
            <Footer />
        </div>
    );
}