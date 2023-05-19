import { iClient } from "./client"
import { iUser } from "./user"

export interface iClientUser {
	id: number

	client: iClient

	user: iUser
	
	working: boolean
}