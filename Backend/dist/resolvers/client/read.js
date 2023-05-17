"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readClient = void 0;
const getFields_1 = require("../../utils/getFields");
const readClient = async (parent, args, { db }, info) => {
    const fields = args.nest ? args.nest : (0, getFields_1.getFields)(info, "readClient");
    const searchedId = args.id ? { id: args.id } : undefined;
    let found = (await db.sequelize.models.Client.findAll({
        where: searchedId,
        attributes: fields.attributes
    }));
    return found;
};
exports.readClient = readClient;
//# sourceMappingURL=read.js.map