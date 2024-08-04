import { z } from 'zod';

export const signupFormSchema = z.object({
	username: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(8)
});

export type SignupFormSchema = typeof signupFormSchema;
