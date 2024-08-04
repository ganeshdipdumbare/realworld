import { Zodios } from '@zodios/core';
import { z } from 'zod';
import { signinFormSchema } from '../routes/signin/schema';

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
						user: signinFormSchema
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
			})
		}
	]
);
