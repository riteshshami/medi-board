"use client";

import * as z from "zod";
import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    type: z.string().min(1, {
        message: "Type of disease is required"
    }),
    name: z.string().min(1, {
        message: "Name of medicine is required."
    }),
    treatment: z.string().min(1, {
        message: "Minimum one step is required."
    }),
})

const Medicine = () => {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            type: "",
            name: "",
            treatment: "",
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log("Values", values);
            await axios.post("/api/pills", values);

            form.reset();
            router.refresh();
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-8 px-6">
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Type</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter type of disease" {...field} />
                            </FormControl>
                            <FormDescription>
                                Add type of disease
                            </FormDescription>
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
                                <Input placeholder="Enter name of disease" {...field} />
                            </FormControl>
                            <FormDescription>
                                Add name of disease
                            </FormDescription>
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
                            <FormDescription>
                                Add steps of treatment.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading}>Submit</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
};

export default Medicine;
