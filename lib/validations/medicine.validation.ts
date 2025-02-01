import * as z from 'zod';

export const UserValidation = z.object({
    name: z.string().min(3).max(30),
});
