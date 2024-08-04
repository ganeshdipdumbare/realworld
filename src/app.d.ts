// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				username: string;
				email: string;
				image: string;
				bio: string;
			} | null;
		}
		namespace Superforms {
			type Message = {
				status: Number;
				type: 'error' | 'success';
				text: string;
			};
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
