"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUser = void 0;
const getFields_1 = require("../../utils/getFields");
const read_1 = require("../client/read");
const read_2 = require("../region/read");
const readUser = async (parent, args, { db }, info) => {
    const fields = args.nest ? args.nest : (0, getFields_1.getFields)(info, "readUser");
    const clientFields = fields.include.find((client) => client.name === "client");
    const regionFields = fields.include.find((region) => region.name === "region");
    if (clientFields)
        fields.attributes.push("fkClient");
    if (regionFields)
        fields.attributes.push("fkRegion");
    const searchedId = args.id ? { id: args.id } : undefined;
    let found = (await db.sequelize.models.User.findAll({
        where: searchedId,
        attributes: fields.attributes
    }));
    if (clientFields) {
        found = await Promise.all(found.map(async (entry) => {
            const related = await (0, read_1.readClient)(this, { id: entry.fkClient, nest: clientFields }, { db }, info);
            entry.client = related[0];
            return entry;
        }));
    }
    if (regionFields) {
        found = await Promise.all(found.map(async (entry) => {
            const related = await (0, read_2.readRegion)(this, { id: entry.fkRegion, nest: regionFields }, { db }, info);
            entry.region = related[0];
            return entry;
        }));
    }
    return found;
};
exports.readUser = readUser;
//# sourceMappingURL=read.js.map