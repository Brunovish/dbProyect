import { createClient, deleteClient, readClient, updateClient } from "./client"


export const resolvers = {
	Query: {
		readClient,
		
	},

	Mutation: {
		createClient,
		deleteClient,
		updateClient,

	}
}
