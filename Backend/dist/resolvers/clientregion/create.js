"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientRegion = void 0;
const createClientRegion = async (parent, args, { db }, info) => {
    const created = (await db.sequelize.models.ClientRegion.create({
        fkClient: args.input.fkClient,
        fkRegion: args.input.fkRegion,
        local: args.input.local
    }));
    return created;
};
exports.createClientRegion = createClientRegion;
//# sourceMappingURL=create.js.map