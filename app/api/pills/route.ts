import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/lib/mongoose";
import Medicine from "@/lib/models/medicine.model";

import { currentProfile } from "@/lib/current-profile";

export async function POST(req: NextRequest) {
    try {
        await dbConnect(); // Ensure database is connected

        const { type, name, treatment } = await req.json();
        const profile = await currentProfile();

        console.log("Received values:", { type, name, treatment });

        if (!profile) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (!type || !name || !treatment) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Create a new medicine entry
        const newMedicine = new Medicine({
            type,
            name,
            treatment,
            userId: profile.id as string,
        });

        await newMedicine.save(); // Save to MongoDB

        return NextResponse.json(
            { message: "Medicine added successfully", medicine: newMedicine },
            { status: 201 }
        );

    } catch (error) {
        console.error("[MEDICINES_POST_ERROR]", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
