import { iClient } from ".."
import { iRegion } from ".."

export interface iUser {
	id: number
	/**
	 * The User's phone number
	 * @example "555896448"
	 * */
	Region: iRegion
	/**
	 * The User's payment tier (tier table relation)
	 */
	Client: iClient
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