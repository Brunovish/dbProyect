import { iContext } from "index"
import { iUser } from "types"

export const createUser = async (
	parent: any,
	args: {
		input: {
			fkClient: number
			fkRegion: number
			email: string
			signUp: String
		}
	},
	{ db }: iContext,
	info: any
) => {
	const created: iUser = (await db.sequelize.models.User.create({
		fkClient: args.input.fkClient,
		fkRegion: args.input.fkRegion,
		email: args.input.email,
		signUp: args.input.signUp
	})) as any

	return created
}
