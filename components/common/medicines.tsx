import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

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
                    {medicines.map((medicine, index) => (
                        <React.Fragment key={medicine?._id}>
                            <TableRow>
                                <TableCell className="font-medium">{medicine?.type}</TableCell>
                                <TableCell>{medicine?.name}</TableCell>
                                <TableCell className="text-right">{medicine?.treatment}</TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Medicines;
