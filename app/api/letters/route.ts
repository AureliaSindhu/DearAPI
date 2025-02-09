import { NextResponse } from "next/server";
import { saveLetter } from "../../../lib/letters";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { recipient, message } = body;

        if (!recipient || !message) {
        return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 }
        );
        }

        const id = Math.random().toString(36).substring(2, 9);
        const letter = {
        id,
        recipient,
        message,
        createdAt: new Date().toISOString(),
        };

        saveLetter(letter);

        return NextResponse.json(letter, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
        { error: "Server error" },
        { status: 500 }
        );
    }
}
