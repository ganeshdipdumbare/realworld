import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
	// check if the user is logged in
	// if they are, return their details
	// if they're not, return null
	return {
		user: locals.user && {
			username: locals.user.username,
			email: locals.user.email,
			image: locals.user.image,
			bio: locals.user.bio
		}
	};
}
