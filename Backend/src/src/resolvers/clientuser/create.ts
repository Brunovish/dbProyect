import { iContext } from "index"
import { iClientUser } from "types"

export const createClientUser = async (
	parent: any,
	args: {
		input: {
			fkClient: number
			fkUser: number
			working: boolean
		}
	},
	{ db }: iContext,
	info: any
) => {
	const created: iClientUser = (await db.sequelize.models.ClientUser.create({
		fkClient: args.input.fkClient,
		fkUser: args.input.fkUser,
		working: args.input.working
	})) as any

	return created
}
