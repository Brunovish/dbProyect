import { iContext } from "index"
import { iRegion } from "types"

export const createRegion = async (
	parent: any,
	args: {
		input: {
			name: string
		}
	},
	{ db }: iContext,
	info: any
) => {
	const created: iRegion = (await db.sequelize.models.Region.create({
		name: args.input.name,
	})) as any

	return created
}
