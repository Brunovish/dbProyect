import { iContext } from "index"
import { iClientRegion } from "types"

export const createClientRegion = async (
	parent: any,
	args: {
		input: {
			fkClient: number
			fkRegion: number
			local: boolean
		}
	},
	{ db }: iContext,
	info: any
) => {
	const created: iClientRegion = (await db.sequelize.models.ClientRegion.create({
		fkClient: args.input.fkClient,
		fkRegion: args.input.fkRegion,
		local: args.input.local
	})) as any

	return created
}
