import { z } from 'zod';

export const signinFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8)
});

export type SigninFormSchema = typeof signinFormSchema;
