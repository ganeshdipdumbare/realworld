import type { PageServerLoad } from './$types';

export const prerender = false;
export const load: PageServerLoad = async ({ locals, cookies }) => {
	locals.user = null;
	cookies.set('jwt', '', { path: '/' });
	return {};
};
