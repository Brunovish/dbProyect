export interface iClient {
	id: number
	/**
	 * The brand's name
	 * @example "Microsoft"
	 */
	name: string
	/**
	 * The brand's login email
	 * @example "microsoft@outlook.com"
	 */
	email: string
	/**
	 * The password's hash
	 * @example "5e884898da2804"
	 */
	passwordHash: string
	/**
	 * The brand's phone number
	 * @example "555896448"
	 * */
	phone: string
	/**
	 * Whether the brand has a due payment or not
	 * @example false
	 */
	paymentDue: boolean
}
