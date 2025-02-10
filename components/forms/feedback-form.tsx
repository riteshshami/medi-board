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
import { useState } from "react";
import { useRouter } from "next/navigation";

// Validation Schema
const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }).min(1, { message: "Email is required." }),
    name: z.string().min(1, { message: "Name is required." }),
    feedback: z.string().min(1, { message: "Feedback is required." }),
  });

// Component
const FeedbackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Form Initialization
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      feedback: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);

      await axios.post("/api/", values);

      form.reset();
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormDescription>Add your email address</FormDescription>
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
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormDescription>Add your name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feedback</FormLabel>
                <FormControl>
                  <Textarea placeholder="Please, give us your feedback" {...field} />
                </FormControl>
                <FormDescription>Please give us feedback for make us better and make your experience smooth</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center space-x-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Processing..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FeedbackForm;
