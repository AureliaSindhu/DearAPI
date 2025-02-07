import { NextResponse } from "next/server";
import { getLetter } from "@/lib/letters";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
    ) {
    const letter = getLetter(params.id);
    if (!letter) {
        return NextResponse.json({ error: "Letter not found" }, { status: 404 });
    }
    return NextResponse.json(letter);
}
