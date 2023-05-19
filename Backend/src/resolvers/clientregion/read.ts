import { iContext } from "index"
import { iFieldSelection } from "../../utils/getFields"
import { getFields } from "../../utils/getFields"

import { iClientRegion} from "types"
import { readClient } from '../client/read';
import { readRegion } from '../region/read';

export const readClientRegion = async (
	parent: any,
	args: { id: number; nest: iFieldSelection },
	{ db }: iContext,
	info: any
): Promise<iClientRegion[]> => {
	const fields = args.nest ? args.nest : getFields(info, "readClientRegion")

	const clientFields = fields.include.find((client) => client.name === "client")
	const regionFields = fields.include.find((region) => region.name === "region")

	if (clientFields) fields.attributes.push("fkClient")
	if (regionFields) fields.attributes.push("fkRegion")

	const searchedId = args.id ? { id: args.id } : undefined
	let found = (await db.sequelize.models.ClientRegion.findAll({
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

	if (regionFields) {
		found = await Promise.all(
			found.map(async (entry) => {
				const related = await readRegion(
					this,
					{ id: entry.fkRegion, nest: regionFields },
					{ db },
					info
				)
				entry.region = related[0]

				return entry
			})
		)
	}

	return found
}
