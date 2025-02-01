import * as z from 'zod';

export const UserValidation = z.object({
    image: z.string().url().min(1, "Profile photo url cannot be empty"),
    name: z.string().min(3).max(30),
    email: z.string().email({ message: "Invalid email address" })
});
