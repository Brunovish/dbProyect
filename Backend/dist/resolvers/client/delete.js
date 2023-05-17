"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = void 0;
const deleteClient = async (parent, args, { db }, info) => {
    const toDelete = await db.sequelize.models.Client.findByPk(args.id);
    if (!toDelete) {
        throw new Error(`No entry with the id ${args.id} could be found`);
    }
    else {
        return toDelete.destroy();
    }
};
exports.deleteClient = deleteClient;
//# sourceMappingURL=delete.js.map