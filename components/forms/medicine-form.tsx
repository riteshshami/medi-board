"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Validation Schema
const formSchema = z.object({
    type: z.string().min(1, { message: "Type of disease is required" }),
    name: z.string().min(1, { message: "Name of disease is required." }),
    treatment: z.string().min(1, { message: "Minimum one step is required." }),
});

// Props Interface
interface EditProps {
    edit: boolean;
    medicineId?: string;
    type?: string;
    name?: string;
    treatment?: string;
}

// Component
const Medicine: React.FC<EditProps> = ({ edit, medicineId, type, name, treatment }) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Form Initialization
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: edit ? {
            type: type as string,
            name: name as string,
            treatment: treatment as string,
        } : {
            type: "",
            name: "",
            treatment: "",
        },
    });

    // Fetch medicine details if in edit mode
    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`/api/single-pill?id=${medicineId}`)
            .then(({ data }) => {
                form.reset({
                    type: data?.type || "",
                    name: data?.name || "",
                    treatment: data?.treatment || "",
                });
            })
            .catch((error) => console.error("Unable to fetch medicine details", error))
            .finally(() => setIsLoading(false));
    }, [edit, medicineId, form]);

    // Handle form submission
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setIsLoading(true);

            if (edit && medicineId) {
                await axios.put(`/api/single-pill?id=${medicineId}`, values);
            } else {
                await axios.post("/api/pills", values);
            }

            form.reset();
            router.refresh();
            window.location.reload();
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle delete medicine
    const deleteMedicine = async () => {
        if (!medicineId) return;

        try {
            setIsLoading(true);
            console.log("Going for delete")
            await axios.delete(`/api/single-pill?id=${medicineId}`);

            router.refresh();
            window.location.reload();
        } catch (error) {
            console.error("Error deleting medicine:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-6">
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter type of disease" {...field} />
                                </FormControl>
                                <FormDescription>Add type of disease</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter name of medicine" {...field} />
                                </FormControl>
                                <FormDescription>Add name of medicine</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="treatment"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Treatment</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Enter steps of treatment" {...field} />
                                </FormControl>
                                <FormDescription>Add steps of treatment</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-between items-center space-x-4">
                        <Button type="submit" disabled={isLoading} className='hover:text-black'>
                            {isLoading ? "Processing..." : edit ? "Update" : "Submit"}
                        </Button>
                        {edit && (
                            <Button type="button" variant="destructive" onClick={deleteMedicine} disabled={isLoading} className="bg-red-600 text-[#E3DCD2] hover:text-black">
                                Delete
                            </Button>
                        )}
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default Medicine;
