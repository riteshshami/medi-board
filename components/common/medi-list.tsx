"use client";

import React, { useEffect, useState } from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import axios from "axios";
import MediSkeleton from "./medi-skeleton";
import Medicines from "./medicines";

const Medilist = () => {

    const [medicines, setMedicines] = useState([]);

    const fetchMedicine = async () => {
        try {
            const { data } = await axios.get("/api/pills"); // Fetching data
            setMedicines(data); // Updating state
        } catch (error) {
            console.error("Unable to fetch medicines", error);
        }
    };

    useEffect(() => {
        fetchMedicine();
    }, []);

    return (
        <ScrollArea className="h-[65vh] w-full rounded-md border">
            {
                medicines.length === 0 ? (<MediSkeleton />) : (<Medicines medicines={medicines} />)
            }
        </ScrollArea>
    )
}

export default Medilist;
