"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"

const ValentineForm: React.FC = () => {
    const [recipient, setRecipient] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!recipient || !message) {
        setError("Please fill in all fields.")
        return
        }
        setError(null)
        const res = await fetch("/api/letters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipient, message }),
        })
        if (res.ok) {
        const data = await res.json()
        router.push(`/letter/${data.id}`)
        } else {
        const errData = await res.json()
        setError(errData.error || "Something went wrong")
        }
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-pink-100 to-red-100 p-8 rounded-3xl shadow-lg max-w-2xl mx-auto text-black"
        >
        <div className="mb-6 text-center">
            <Heart className="inline-block text-rose-500 w-12 h-12 mb-2 animate-pulse" />
            <h2 className="text-3xl font-bold text-rose-700">Create Your Valentine's Letter</h2>
        </div>
        <div className="mb-6">
            <label htmlFor="recipient" className="block text-rose-700 font-semibold mb-2">
            To My Valentine:
            </label>
            <input
            id="recipient"
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Enter your partner's name"
            className="w-full p-3 rounded-lg border-2 border-rose-300 focus:border-rose-500 focus:ring focus:ring-rose-200 transition duration-200 ease-in-out"
            />
        </div>
        <div className="mb-6">
            <label htmlFor="message" className="block text-rose-700 font-semibold mb-2">
            Your Lovely Message:
            </label>
            <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your heartfelt message here..."
            className="w-full p-3 rounded-lg border-2 border-rose-300 focus:border-rose-500 focus:ring focus:ring-rose-200 transition duration-200 ease-in-out h-40 resize-none"
            />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50"
        >
            Generate Love Letter <Heart className="inline-block ml-2 w-5 h-5" />
        </button>
        </form>
    )
}

export default ValentineForm

