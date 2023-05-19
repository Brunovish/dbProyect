"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientRegion = void 0;
const updateClientRegion = async (parent, args, { db }, info) => {
    const toUpdate = await db.sequelize.models.ClientRegion.findByPk(args.id);
    if (!toUpdate) {
        throw new Error(`No entry with the id ${args.id} could be found`);
    }
    else {
        return await toUpdate.update(args.input);
    }
};
exports.updateClientRegion = updateClientRegion;
//# sourceMappingURL=update.js.map