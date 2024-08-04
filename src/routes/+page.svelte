<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.data.user}
	<div class="flex min-h-screen items-center justify-center p-4">
		<p>Welcome back, {$page.data.user.username}!</p>
	</div>
{:else}
	<div class="flex min-h-screen items-center justify-center p-4">
		<p>Sign in to access your account.</p>
	</div>
{/if}
