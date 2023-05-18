"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const updateUser = async (parent, args, { db }, info) => {
    const toUpdate = await db.sequelize.models.User.findByPk(args.id);
    if (!toUpdate) {
        throw new Error(`No entry with the id ${args.id} could be found`);
    }
    else {
        return await toUpdate.update(args.input);
    }
};
exports.updateUser = updateUser;
//# sourceMappingURL=update.js.map