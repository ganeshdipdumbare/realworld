<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.user}
	<p>Welcome back, {data.user.username}!</p>
{:else}
	<p>Sign in to access your account.</p>
{/if}
