"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRegion = void 0;
const deleteRegion = async (parent, args, { db }, info) => {
    const toDelete = await db.sequelize.models.Region.findByPk(args.id);
    if (!toDelete) {
        throw new Error(`No entry with the id ${args.id} could be found`);
    }
    else {
        return toDelete.destroy();
    }
};
exports.deleteRegion = deleteRegion;
//# sourceMappingURL=delete.js.map