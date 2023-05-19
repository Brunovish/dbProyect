import { iContext } from "index"

export const updateClientRegion = async (
	parent: any,
	args: {
		id: number
		input: {
			fkClient?: number
			fkRegion?: number
			local?: boolean
		}
	},
	{ db }: iContext,
	info: any
) => {
	const toUpdate = await db.sequelize.models.ClientRegion.findByPk(args.id)

	if (!toUpdate) {
		throw new Error(`No entry with the id ${args.id} could be found`)
	} else {
		return await toUpdate.update(args.input)
	}
}
