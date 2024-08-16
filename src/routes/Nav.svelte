<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import * as Menubar from '$lib/components/ui/menubar/index.js';
	import { toggleMode } from 'mode-watcher';
	import Moon from 'svelte-radix/Moon.svelte';
	import Sun from 'svelte-radix/Sun.svelte';
	import UserProfile from './UserProfile.svelte';
	import { date } from 'zod';
</script>

<nav class="fixed left-0 right-0 top-0 flex h-16 items-center">
	<div class="container mx-auto flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<a href="/" class="cursor-pointer">
				<img src="/logo.gif" alt="Logo" class="h-auto w-20 p-2" />
			</a>
		</div>
		<div class="space-x-4">
			<Menubar.Root>
				{#if $page.data.user}
					<Menubar.Menu>
						<Menubar.Trigger>
							<button type="button" on:click={() => goto('/')}>Home</button>
						</Menubar.Trigger>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>
							<button type="button" on:click={() => goto('/dashboard')}>Dashboard</button>
						</Menubar.Trigger>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>
							<UserProfile />
						</Menubar.Trigger>
					</Menubar.Menu>
				{:else}
					<Menubar.Menu>
						<Menubar.Trigger>
							<button type="button" on:click={() => goto('/')}>Home</button>
						</Menubar.Trigger>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>
							<button type="button" on:click={() => goto('/login')}>Login</button>
						</Menubar.Trigger>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>
							<button type="button" on:click={() => goto('/signup')}>Sign up</button>
						</Menubar.Trigger>
					</Menubar.Menu>
				{/if}
				<Menubar.Menu>
					<Menubar.Trigger>
						<Button on:click={toggleMode} variant="ghost" size="icon">
							<Sun
								class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
							/>
							<Moon
								class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
							/>
							<span class="sr-only">Toggle theme</span>
						</Button>
					</Menubar.Trigger>
				</Menubar.Menu>
			</Menubar.Root>
		</div>
	</div>
</nav>
