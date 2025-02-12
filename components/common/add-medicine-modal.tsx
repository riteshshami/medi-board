"use client";

import dynamic from 'next/dynamic';

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const Medicine = dynamic(() => import('../forms/medicine-form'));

const AddMedicineModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className='hover:text-black'>Add Medicine</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Medicine</DialogTitle>
                </DialogHeader>
                <Medicine edit={false}  />
            </DialogContent>
        </Dialog>
    )
}

export default AddMedicineModal
