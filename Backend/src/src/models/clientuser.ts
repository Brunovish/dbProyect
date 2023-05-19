import {
	Column,
	PrimaryKey,
    DataType, 
	AutoIncrement,
	Model,
	Table,
	ForeignKey,
	HasOne
} from "sequelize-typescript"
import { iClientUser } from "types"
import Client from "./client"
import User from "./user"

@Table({ tableName: "clientUser", timestamps: false })
export default class ClientUser extends Model<iClientUser> {
	@AutoIncrement
	@PrimaryKey
	@Column({ type: DataType.NUMBER, allowNull: false })
	id: number

	@Column({ type: DataType.STRING, allowNull: false })
	@ForeignKey(() => Client)
	@Column({ field: "fkClient" })
	fkClient: number

    @HasOne(() => Client, { foreignKey: "id", sourceKey: "fkClient" })
	client: Client

	@Column({ type: DataType.STRING, allowNull: false })
    @ForeignKey(() => User)
	@Column({ field: "fkUser" })
	fkUser: number
   
    @HasOne(() => User, { foreignKey: "id", sourceKey: "fkUser" })
	user: User
 
    @Column({ type: DataType.STRING, allowNull: false })
	working: boolean

}