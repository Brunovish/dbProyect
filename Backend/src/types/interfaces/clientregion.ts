import { iClient } from "./client"
import { iRegion } from "./region"

export interface iClientRegion {
	id: number

	client: iClient

	region: iRegion
	
	local: boolean
}