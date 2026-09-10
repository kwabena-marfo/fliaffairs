import { z } from "zod";
import isEmail from "validator/lib/isEmail";

export const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .refine(isEmail, "Please enter a valid email."),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;
