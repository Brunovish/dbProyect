import { iContext } from "index"
import { iFieldSelection } from "../../utils/getFields"
import { getFields } from "../../utils/getFields"

import { iUser} from "types"

export const readUser = async (
	parent: any,
	args: { id: number; nest: iFieldSelection },
	{ db }: iContext,
	info: any
): Promise<iUser[]> => {
	const fields = args.nest ? args.nest : getFields(info, "readUser")

	const searchedId = args.id ? { id: args.id } : undefined
	let found = (await db.sequelize.models.User.findAll({
		where: searchedId,
		attributes: fields.attributes
	})) as any[]

	return found
}
