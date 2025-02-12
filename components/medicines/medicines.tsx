import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Medicine from "../forms/medicine-form";


interface Medicine {
    _id: string;
    type: string;
    name: string;
    treatment: string;
}

interface MedicineProps {
    medicines: Medicine[];
}

const Medicines: React.FC<MedicineProps> = ({ medicines }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
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
                <TableBody>
                    {medicines.map((medicine) => (
                        <React.Fragment key={medicine?._id}>
                            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                <DialogTrigger asChild>
                                    <TableRow className="hover:cursor-pointer">
                                        <TableCell className="font-medium">{medicine?.type}</TableCell>
                                        <TableCell>{medicine?.name}</TableCell>
                                        <TableCell className="text-right">{medicine?.treatment}</TableCell>
                                    </TableRow>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Edit</DialogTitle>
                                    </DialogHeader>
                                    <Medicine edit={true} medicineId={medicine?._id} type={medicine?.type} name={medicine?.name} treatment={medicine?.treatment} />
                                </DialogContent>
                            </Dialog>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Medicines;
