import { Zodios } from '@zodios/core';
import { map, z } from 'zod';
import { loginFormSchema } from '../routes/login/schema';

export const apiClient = new Zodios(
	'https://api.realworld.io/api',
	// API definition
	[
		{
			method: 'post',
			path: '/users/login', // auto detect :id and ask for it in apiClient get params
			alias: 'loginUser', // optional alias to call this endpoint with it
			description: 'Login user',
			requestFormat: 'json',
			requestHeaders: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
				'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
			},
			parameters: [
				{
					name: 'user',
					type: 'Body',
					schema: z.object({
						user: loginFormSchema
					})
				}
			],
			response: z.object({
				user: z.object({
					email: z.string().email(),
					username: z.string(),
					image: z.string().optional(),
					token: z.string()
				})
			}),
			errors: [
				{
					status: 422,
					schema: z.object({
						errors: map(z.string(), z.array(z.string()))
					})
				}
			]
		},
		{
			method: 'post',
			path: '/users', // auto detect :id and ask for it in apiClient get params
			alias: 'signupUser', // optional alias to call this endpoint with it
			description: 'Signup user',
			requestFormat: 'json',
			requestHeaders: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
				'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
			},
			parameters: [
				{
					name: 'user',
					type: 'Body',
					schema: z.object({
						user: z.object({
							username: z.string(),
							email: z.string().email(),
							password: z.string().min(8)
						})
					})
				}
			],
			response: z.object({
				user: z.object({
					email: z.string().email(),
					username: z.string(),
					image: z.string().optional(),
					token: z.string()
				})
			}),
			errors: [
				{
					status: 422,
					schema: z.object({
						errors: map(z.string(), z.array(z.string()))
					})
				}
			]
		}
	]
);
