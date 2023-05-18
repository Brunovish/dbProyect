"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readRegion = void 0;
const getFields_1 = require("../../utils/getFields");
const readRegion = async (parent, args, { db }, info) => {
    const fields = args.nest ? args.nest : (0, getFields_1.getFields)(info, "readRegion");
    const searchedId = args.id ? { id: args.id } : undefined;
    let found = (await db.sequelize.models.Region.findAll({
        where: searchedId,
        attributes: fields.attributes
    }));
    return found;
};
exports.readRegion = readRegion;
//# sourceMappingURL=read.js.map