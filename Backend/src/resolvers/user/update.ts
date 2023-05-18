import { iContext } from "index"
import { DateDataType } from "sequelize"

export const updateUser = async (
	parent: any,
	args: {
		id: number
		input: {
			fkClient?: number
			fkRegion?: number
			email?: string
			signUp?: DateDataType
		}
	},
	{ db }: iContext,
	info: any
) => {
	const toUpdate = await db.sequelize.models.User.findByPk(args.id)

	if (!toUpdate) {
		throw new Error(`No entry with the id ${args.id} could be found`)
	} else {
		return await toUpdate.update(args.input)
	}
}
