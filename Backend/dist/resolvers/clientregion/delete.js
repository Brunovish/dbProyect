"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientRegion = void 0;
const deleteClientRegion = async (parent, args, { db }, info) => {
    const toDelete = await db.sequelize.models.ClientRegion.findByPk(args.id);
    if (!toDelete) {
        throw new Error(`No entry with the id ${args.id} could be found`);
    }
    else {
        return toDelete.destroy();
    }
};
exports.deleteClientRegion = deleteClientRegion;
//# sourceMappingURL=delete.js.map