import type { PageServerLoad, Actions } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginFormSchema } from './schema.js';
import { apiClient } from '$lib/api.ts';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(loginFormSchema))
	};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();

		// validate the form here
		// if the form is invalid, return the errors
		// if the form is valid, call the login API
		const validatedForm = await superValidate(form, zod(loginFormSchema));
		if (!validatedForm.valid) {
			return fail(400, {
				validatedForm
			});
		}

		// call the login API
		const data = await apiClient.loginUser({
			user: validatedForm.data
		});

		const value = btoa(JSON.stringify(data.user));
		cookies.set('jwt', value, { path: '/' });

		redirect(307, '/');
	}
};
