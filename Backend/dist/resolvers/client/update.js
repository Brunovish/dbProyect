"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClient = void 0;
const updateClient = async (parent, args, { db }, info) => {
    const toUpdate = await db.sequelize.models.Client.findByPk(args.id);
    if (!toUpdate) {
        throw new Error(`No entry with the id ${args.id} could be found`);
    }
    else {
        return await toUpdate.update(args.input);
    }
};
exports.updateClient = updateClient;
//# sourceMappingURL=update.js.map