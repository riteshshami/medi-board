import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const MediSkeleton = () => {
    return (
        <div className="p-4">
            <Skeleton className="h-5 w-[100px] mb-4" />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">
                            <Skeleton className="h-4 w-full" />
                        </TableHead>
                        <TableHead>
                            <Skeleton className="h-4 w-full" />
                        </TableHead>
                        <TableHead className="text-right">
                            <Skeleton className="h-4 w-full" />
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[...Array(10)].map((_, index) => (
                        <React.Fragment key={index}>
                            <TableRow>
                                <TableCell>
                                    <Skeleton className="h-4 w-[80px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-4 w-full" />
                                </TableCell>
                                <TableCell className="text-right">
                                    <Skeleton className="h-4 w-[100px] ml-auto" />
                                </TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default MediSkeleton
