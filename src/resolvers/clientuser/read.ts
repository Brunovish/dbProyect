import { iContext } from "index"
import { iFieldSelection } from "../../utils/getFields"
import { getFields } from "../../utils/getFields"

import { iClientUser} from "types"
import { readClient } from '../client/read';
import { readUser } from '../user/read';

export const readClientUser = async (
	parent: any,
	args: { id: number; nest: iFieldSelection },
	{ db }: iContext,
	info: any
): Promise<iClientUser[]> => {
	const fields = args.nest ? args.nest : getFields(info, "readClientUser")

	const clientFields = fields.include.find((client) => client.name === "client")
	const userFields = fields.include.find((user) => user.name === "user")

	if (clientFields) fields.attributes.push("fkClient")
	if (userFields) fields.attributes.push("fkUser")

	const searchedId = args.id ? { id: args.id } : undefined
	let found = (await db.sequelize.models.ClientUser.findAll({
		where: searchedId,
		attributes: fields.attributes
	})) as any[]

	if (clientFields) {
		found = await Promise.all(
			found.map(async (entry) => {
				const related = await readClient(
					this,
					{ id: entry.fkClient, nest: clientFields },
					{ db },
					info
				)
				entry.client = related[0]

				return entry
			})
		)
	}

	if (userFields) {
		found = await Promise.all(
			found.map(async (entry) => {
				const related = await readUser(
					this,
					{ id: entry.fkUser, nest: userFields },
					{ db },
					info
				)
				entry.user = related[0]

				return entry
			})
		)
	}

	return found
}
