import { iContext } from "index"

export const updateClientUser = async (
	parent: any,
	args: {
		id: number
		input: {
			fkClient?: number
			fkUser?: number
			working?: boolean
		}
	},
	{ db }: iContext,
	info: any
) => {
	const toUpdate = await db.sequelize.models.ClientUser.findByPk(args.id)

	if (!toUpdate) {
		throw new Error(`No entry with the id ${args.id} could be found`)
	} else {
		return await toUpdate.update(args.input)
	}
}
