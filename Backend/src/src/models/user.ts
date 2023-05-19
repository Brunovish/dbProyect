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
import { iUser } from "types"
import Client from "./client"
import Region from "./region"

@Table({ tableName: "User", timestamps: false })
export default class User extends Model<iUser> {
	@AutoIncrement
	@PrimaryKey
	@Column({ type: DataType.NUMBER, allowNull: false })
	id: number

	@ForeignKey(() => Client)
	@Column({ field: "fkClient" })
	fkClient: number

    @HasOne(() => Client, { foreignKey: "id", sourceKey: "fkClient" })
	client: Client

    @ForeignKey(() => Region)
	@Column({ field: "fkRegion" })
	fkRegion: number
    
    @HasOne(() => Region, { foreignKey: "id", sourceKey: "fkRegion" })
	region: Region

    @Column({ type: DataType.STRING, allowNull: false })
	email: String

	@Column({ type: DataType.STRING, allowNull: false })
	signUp: String

}