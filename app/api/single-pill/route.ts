import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/lib/mongoose";
import Medicine from "@/lib/models/medicine.model";

import { currentProfile } from "@/lib/current-profile";

export async function DELETE(req: NextRequest) {
    try {
        await dbConnect(); // Connect to the database

        const profile = await currentProfile(); // Get the current user profile
        if (!profile) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Extract medicine ID from the request URL
        const { searchParams } = new URL(req.url);
        const medicineId = searchParams.get("id");

        if (!medicineId) {
            return NextResponse.json({ error: "Medicine ID is required" }, { status: 400 });
        }

        // Find and delete the medicine only if it belongs to the logged-in user
        const deletedMedicine = await Medicine.findOneAndDelete({
            _id: medicineId,
            userId: profile.id,
        });

        if (!deletedMedicine) {
            return NextResponse.json({ error: "Medicine not found or unauthorized" }, { status: 404 });
        }

        return NextResponse.json({ message: "Medicine deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("[MEDICINES_DELETE_ERROR]", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        await dbConnect(); // Connect to the database

        const profile = await currentProfile(); // Get the current user profile
        if (!profile) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Extract medicine ID from the request URL
        const { searchParams } = new URL(req.url);
        const medicineId = searchParams.get("id");

        if (!medicineId) {
            return NextResponse.json({ error: "Medicine ID is required" }, { status: 400 });
        }

        // Parse the request body for updated data
        const body = await req.json();
        const { type, name, treatment } = body;

        if (!type || !name || !treatment) {
            return NextResponse.json({ error: "All fields (type, name, treatment) are required" }, { status: 400 });
        }

        // Find and update the medicine only if it belongs to the logged-in user
        const updatedMedicine = await Medicine.findOneAndUpdate(
            { _id: medicineId, userId: profile.id },
            { type, name, treatment }, // Updating fields
            { new: true } // Return the updated document
        );

        if (!updatedMedicine) {
            return NextResponse.json({ error: "Medicine not found or unauthorized" }, { status: 404 });
        }

        return NextResponse.json({ message: "Medicine updated successfully", medicine: updatedMedicine }, { status: 200 });
    } catch (error) {
        console.error("[MEDICINES_UPDATE_ERROR]", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

