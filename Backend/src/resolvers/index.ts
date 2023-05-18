import { createClient, deleteClient, readClient, updateClient } from "./client"
import { createUser, deleteUser, readUser, updateUser } from "./user"
import { createRegion, deleteRegion, readRegion, updateRegion } from "./region"

export const resolvers = {
	Query: {
		readClient,
		readUser,
		readRegion
	},

	Mutation: {

		createClient,
		deleteClient,
		updateClient,

		createUser,
		deleteUser,
		updateUser,

		createRegion,
		deleteRegion,
		updateRegion

	}
}
