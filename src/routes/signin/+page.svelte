<script lang="ts">
	import type { PageServerData } from '../$types';
	import type { PageData } from './$types';
	import SigninForm from './signin-form.svelte';
	export let data: PageData;
</script>

<div class="flex min-h-screen items-center justify-center p-4">
	<SigninForm data={data.form} />
</div>
