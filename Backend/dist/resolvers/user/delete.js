"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const deleteUser = async (parent, args, { db }, info) => {
    const toDelete = await db.sequelize.models.User.findByPk(args.id);
    if (!toDelete) {
        throw new Error(`No entry with the id ${args.id} could be found`);
    }
    else {
        return toDelete.destroy();
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=delete.js.map