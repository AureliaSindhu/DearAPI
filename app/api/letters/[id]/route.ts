// import { NextResponse } from "next/server";
// import { getLetter } from "@/lib/letters";

// // export async function GET(
// //     request: Request,
// //     { params }: { params: { id: string } }
// //     ) {
// //     const letter = await getLetter(params.id);
// //     if (!letter) {
// //         return NextResponse.json({ error: "Letter not found" }, { status: 404 });
// //     }
// //     return NextResponse.json(letter);
// // }

// export async function GET(
//     request: Request,
//     { params }: { params: { id: string } }
//     ) {
//         console.log("Requested letter id:", params.id);
//         const letter = await getLetter(params.id);
//         console.log("Retrieved letter:", letter);
//         if (!letter) {
//         return NextResponse.json({ error: "Letter not found" }, { status: 404 });
//         }
//         return NextResponse.json(letter);
//     }

import { NextRequest, NextResponse } from 'next/server'
import { getLetter } from '@/lib/letters' // adjust the import to your actual function

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
    ): Promise<NextResponse> {
    console.log("Requested letter id:", params.id);
    const letter = await getLetter(params.id);
    console.log("Retrieved letter:", letter);

    if (!letter) {
        return NextResponse.json({ error: "Letter not found" }, { status: 404 });
    }
    return NextResponse.json(letter);
}