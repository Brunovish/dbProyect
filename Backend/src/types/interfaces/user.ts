import { iClient } from "./client"
import { iRegion } from "./region"

export interface iUser {
	id: number
	/**
	 * The User's phone number
	 * @example "555896448"
	 * */
	region: iRegion
	/**
	 * The User's payment tier (tier table relation)
	 */
	client: iClient
	/**
	 * The User's login email
	 * @example "microsoft@outlook.com"
	 */
	email: String
	/**
	 * The User's login email
	 * @example "microsoft@outlook.com"
	 */
	signUp: String
}