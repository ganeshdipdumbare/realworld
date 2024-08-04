import { apiClient } from '$lib/api.ts';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { loginFormSchema } from './schema.js';

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

		let isSuccess = false;
		try {
			const data = await apiClient.loginUser({
				user: validatedForm.data
			});
			const value = btoa(JSON.stringify(data.user));
			cookies.set('jwt', value, { path: '/' });
			isSuccess = true;
		} catch (error) {
			// convert error.response.data.errors to a Map
			// @ts-ignore
			const map = new Map(Object.entries(error.response.data.errors));
			// Retrieve the single key
			const key = map.keys().next().value;
			// Retrieve the associated value (array)
			const value = map.get(key);

			return message(validatedForm, {
				// @ts-ignore
				status: error.response.status,
				type: 'error',
				// @ts-ignore
				text: `${key} ${value[0]}`
			});
		}

		// Note that dont use rediect inside try-catch block
		if (isSuccess) {
			redirect(302, '/');
		}
	}
};
