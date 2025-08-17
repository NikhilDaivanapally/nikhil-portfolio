import { z } from "zod/v4";

export const mailSchema = z.object({
  name: z
    .string()
    .min(3, "Name should be at least 3 characters")
    .max(100, "Name should be at max 100 characters"),
  email: z.email("Please enter a valid email"),
  message: z.string().min(3, "Message should be at least 3 characters"),
});
