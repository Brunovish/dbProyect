import { iContext } from "index"
import { iFieldSelection } from "../../utils/getFields"
import { getFields } from "../../utils/getFields"

import { iClient } from "types"

export const readClient = async (
	parent: any,
	args: { id: number; nest: iFieldSelection },
	{ db }: iContext,
	info: any
): Promise<iClient[]> => {
	const fields = args.nest ? args.nest : getFields(info, "readClient")

	const searchedId = args.id ? { id: args.id } : undefined
	let found = (await db.sequelize.models.Client.findAll({
		where: searchedId,
		attributes: fields.attributes
	})) as any[]

	return found
}
