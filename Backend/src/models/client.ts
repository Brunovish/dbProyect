import {
	Column,
	DataType,
	PrimaryKey,
	AutoIncrement,
	Model,
	Table,
} from "sequelize-typescript"
import { iClient } from "types"
0
@Table({ tableName:"client", timestamps: false })
export default class Client extends Model<iClient> {
	@AutoIncrement
	@PrimaryKey
	@Column({ type: DataType.NUMBER, allowNull: false })
	id: number

	@Column({ type: DataType.STRING, allowNull: false })
	name: string

	@Column({ type: DataType.STRING, allowNull: false })
	nickname: string

	@Column({ type: DataType.STRING, allowNull: false })
	passwordHash: string

	@Column({ type: DataType.STRING, allowNull: false })
	phone: string
	
	@Column({ type: DataType.BOOLEAN, allowNull: false })
	paymentDue: boolean
}

