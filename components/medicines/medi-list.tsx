"use client";

import React, { useEffect, useState } from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import axios from "axios";
import MediSkeleton from "./medi-skeleton";
import Medicines from "./medicines";

const Medilist = () => {

    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMedicine = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get("/api/pills"); // Fetching data
            setMedicines(data); // Updating state
        } catch (error) {
            console.error("Unable to fetch medicines", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMedicine();
    }, []);

    if (loading) {
        return (
            <MediSkeleton />
        )
    }

    return (
        <ScrollArea className="h-[60vh] w-full rounded-md border-2">
            {
                medicines.length === 0 ? (
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl px-4 py-2 font-extrabold"> NO RECORD FOUND </p>
                    </div>
                ): (
                        <Medicines medicines = { medicines } />
            )
            }
        </ScrollArea>
    )
}

export default Medilist;
