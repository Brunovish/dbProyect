import { createClient, deleteClient, readClient, updateClient } from "./client"
import { createUser, deleteUser, readUser, updateUser } from "./user"
import { createRegion, deleteRegion, readRegion, updateRegion } from "./region"
import { createClientRegion, deleteClientRegion, readClientRegion, updateClientRegion } from "./clientregion"


export const resolvers = {
	Query: {
		readClient,
		readUser,
		readRegion,
		readClientRegion
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
		updateRegion,

		createClientRegion,
		deleteClientRegion,
		updateClientRegion

	}
}
