"use client"

import React from "react"
import { motion } from "framer-motion"
import { HeartIcon } from "lucide-react"
import { getLetter } from "@/lib/letters"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

interface PageProps {
  params: { id: string }
}

export default function LetterPage({ params }: PageProps) {
  const [letter, setLetter] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchLetter = async () => {
      const fetchedLetter = await getLetter(params.id)
      setLetter(fetchedLetter)
      setLoading(false)
    }
    fetchLetter()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rose-950">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <HeartIcon className="w-12 h-12 text-rose-200" />
        </motion.div>
      </div>
    )
  }

  if (!letter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rose-950">
        <p className="text-xl text-rose-200">Letter not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-950 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <Card className="border-rose-200 bg-rose-50">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-rose-800 text-center">Your Love Letter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <p className="text-lg">
                <span className="font-semibold text-rose-700">To My Valentine:</span>{" "}
                <span className="text-rose-900">{letter.recipient}</span>
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <p className="text-lg">
                <span className="font-semibold text-rose-700">Your Lovely Message:</span>
              </p>
              <p className="mt-2 text-rose-900 italic">{letter.message}</p>
            </motion.div>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4">
            <p className="text-rose-600 text-sm">Created at: {new Date(letter.createdAt).toLocaleString()}</p>
            <div className="flex space-x-4">
              <Button variant="default" className="bg-rose-600 hover:bg-rose-700">
                Definitely!
              </Button>
              <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-100">
                YES!
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

