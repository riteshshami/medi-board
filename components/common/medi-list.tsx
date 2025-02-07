"use client";

import React, { useEffect, useState } from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import axios from "axios";
import { Separator } from "../ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const Medilist = () => {

    const [medicines, setMedicines] = useState([]);

    const fetchMedicine = async () => {
      try {
        const { data } = await axios.get("/api/pills"); // Fetching data
        setMedicines(data); // Updating state
        console.log(data);
      } catch (error) {
        console.error("Unable to fetch medicines", error);
      }
    };

    useEffect(() => {
      fetchMedicine();
    }, []);

  return (
    <ScrollArea className="h-[65vh] w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Medicines</h4>
        <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Type</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Treatment</TableHead>
                    </TableRow>
                </TableHeader>
                {medicines.map((medicine) => (
                    <>
                        <TableBody>
                            <TableRow>
                            <TableCell className="font-medium">{medicine?.type}</TableCell>
                            <TableCell>{medicine?.name}</TableCell>
                            <TableCell className="text-right">{medicine?.treatment}</TableCell>
                            </TableRow>
                            <Separator/>
                        </TableBody>
                    </>
                ))}
        </Table>
      </div>
    </ScrollArea>
  )
}

export default Medilist;
