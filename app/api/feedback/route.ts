import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/lib/mongoose";
import Feedback from "@/lib/models/feedback.model";


export async function POST(req: NextRequest) {
    try {
        await dbConnect(); // Ensure database is connected

        const { email, name, feedback } = await req.json();

        console.log("Received values:", { email, name, feedback });

        if (!email || !name || !feedback) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Create a new medicine entry
        const newFeedback = new Feedback({
            email,
            name,
            feedback,
        });

        await newFeedback.save(); // Save to MongoDB

        return NextResponse.json(
            { message: "Feedback posted successfully", feedback: newFeedback },
            { status: 201 }
        );

    } catch (error) {
        console.error("[FEEDBACK_POST_ERROR]", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
