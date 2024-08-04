import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (locals.user === null) {
		throw redirect(301, '/');
	}
}) satisfies PageServerLoad;
