<script lang="ts">
	import '../app.css';
	import { navigating } from '$app/stores';
	import Nav from './Nav.svelte';
	import PreloadingIndicator from './PreloadingIndicator.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

{#if $navigating}
	<PreloadingIndicator></PreloadingIndicator>
{/if}

<ModeWatcher />
<div class="flex min-h-screen flex-col">
	<Nav />
	<div class="flex min-h-screen items-center justify-center p-4">
		<slot />
	</div>
</div>
