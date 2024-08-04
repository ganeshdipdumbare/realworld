<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { type Infer, superForm, type SuperValidated } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { loginFormSchema, type LoginFormSchema } from './schema';
	import * as Alert from '$lib/components/ui/alert';
	import { ExclamationTriangle } from 'svelte-radix';

	export let data: SuperValidated<Infer<LoginFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(loginFormSchema)
	});

	const { form: formData, enhance, message } = form;
</script>

<Card.Root class="w-[350px]">
	<Card.Header>
		<Card.Title>Login</Card.Title>
		<Card.Description>Login to your account.</Card.Description>
	</Card.Header>
	<Card.Content>
		<form method="POST" use:enhance>
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} />
				</Form.Control>
				<Form.Description>This is your email address.</Form.Description>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="password">
				<Form.Control let:attrs>
					<Form.Label>Password</Form.Label>
					<Input {...attrs} bind:value={$formData.password} type="password" />
				</Form.Control>
				<Form.Description>Enter your password.</Form.Description>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button class="w-full">Login</Form.Button>
			{#if $message?.type === 'error'}
				<div class="mt-4">
					<Alert.Root variant="destructive">
						<ExclamationTriangle class="h-4 w-4" />
						<Alert.Title>Error</Alert.Title>
						<Alert.Description>{$message.text}</Alert.Description>
					</Alert.Root>
				</div>
			{/if}
		</form>
	</Card.Content>
</Card.Root>
