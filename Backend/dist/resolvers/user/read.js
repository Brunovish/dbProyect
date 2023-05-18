"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUser = void 0;
const getFields_1 = require("../../utils/getFields");
const readUser = async (parent, args, { db }, info) => {
    const fields = args.nest ? args.nest : (0, getFields_1.getFields)(info, "readUser");
    const searchedId = args.id ? { id: args.id } : undefined;
    let found = (await db.sequelize.models.User.findAll({
        where: searchedId,
        attributes: fields.attributes
    }));
    return found;
};
exports.readUser = readUser;
//# sourceMappingURL=read.js.map