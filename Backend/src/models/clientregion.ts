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
import { iClientRegion } from "types"
import Client from "./client"
import Region from "./region"

@Table({ tableName: "clientRegion", timestamps: false })
export default class ClientRegion extends Model<iClientRegion> {
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
    @ForeignKey(() => Region)
	@Column({ field: "fkRegion" })
	fkRegion: number
   
    @HasOne(() => Region, { foreignKey: "id", sourceKey: "fkRegion" })
	region: Region
 
    @Column({ type: DataType.STRING, allowNull: false })
	local: boolean

}