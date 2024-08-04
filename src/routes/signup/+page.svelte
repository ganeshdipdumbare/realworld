<script lang="ts">
	import type { PageServerData } from '../$types';
	import type { PageData } from './$types';
	import SignupForm from './signup-form.svelte';
	export let data: PageData;
</script>

<SignupForm data={data.form} />
