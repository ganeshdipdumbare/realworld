import type { PageServerLoad, Actions } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { signinFormSchema } from './schema.js';
import { apiClient } from '$lib/api.ts';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(signinFormSchema))
	};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();

		// validate the form here
		// if the form is invalid, return the errors
		// if the form is valid, call the login API
		const validatedForm = await superValidate(form, zod(signinFormSchema));
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
