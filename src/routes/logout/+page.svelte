<script lang="ts">
	import Rocket from 'svelte-radix/Rocket.svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			window.location.href = '/'; // Replace with your desired URL
		}, 3000); // 5000 milliseconds = 5 seconds
	});
</script>

<div class="w-min-1/2">
	<Alert.Root class="w-min-1/2">
		<Rocket class="h-4 w-4" />
		<Alert.Title>Logged out successfully!</Alert.Title>
		<Alert.Description>You will be redirected to the home page.</Alert.Description>
	</Alert.Root>
</div>
