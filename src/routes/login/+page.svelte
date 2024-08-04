<script lang="ts">
	import type { PageServerData } from '../$types';
	import type { PageData } from './$types';
	import LoginForm from './login-form.svelte';
	export let data: PageData;
</script>

<LoginForm data={data.form} />
