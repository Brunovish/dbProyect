"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRegion = void 0;
const updateRegion = async (parent, args, { db }, info) => {
    const toUpdate = await db.sequelize.models.Region.findByPk(args.id);
    if (!toUpdate) {
        throw new Error(`No entry with the id ${args.id} could be found`);
    }
    else {
        return await toUpdate.update(args.input);
    }
};
exports.updateRegion = updateRegion;
//# sourceMappingURL=update.js.map