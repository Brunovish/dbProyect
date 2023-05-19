import { iContext } from "index"
import { iClient } from "types"

export const createClient = async (
	parent: any,
	args: {
		input: {
			name: string
			nickname: string
			passwordHash: string
			phone: string
			paymentDue: boolean
		}
	},
	{ db }: iContext,
	info: any
) => {
	const created: iClient = (await db.sequelize.models.Client.create({
		name: args.input.name,
		nickname: args.input.nickname,
		passwordHash: args.input.passwordHash,
		phone: args.input.phone,
		paymentDue: args.input.paymentDue
	})) as any

	return created
}
