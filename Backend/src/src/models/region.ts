import {
	Column,
	DataType,
	PrimaryKey,
	AutoIncrement,
	Model,
	Table,
} from "sequelize-typescript"
import { iRegion } from "types"
0
@Table({ tableName:"Region", timestamps: false })
export default class Region extends Model<iRegion> {
	@AutoIncrement
	@PrimaryKey
	@Column({ type: DataType.NUMBER, allowNull: false })
	id: number

	@Column({ type: DataType.STRING, allowNull: false })
	name: string

}

