import { iContext } from "index"
import { iFieldSelection } from "../../utils/getFields"
import { getFields } from "../../utils/getFields"

import { iRegion } from "types"

export const readRegion = async (
	parent: any,
	args: { id: number; nest: iFieldSelection },
	{ db }: iContext,
	info: any
): Promise<iRegion[]> => {
	const fields = args.nest ? args.nest : getFields(info, "readRegion")

	const searchedId = args.id ? { id: args.id } : undefined
	let found = (await db.sequelize.models.Region.findAll({
		where: searchedId,
		attributes: fields.attributes
	})) as any[]

	return found
}
