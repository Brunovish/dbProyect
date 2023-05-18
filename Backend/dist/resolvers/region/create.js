"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegion = void 0;
const createRegion = async (parent, args, { db }, info) => {
    const created = (await db.sequelize.models.Region.create({
        name: args.input.name,
    }));
    return created;
};
exports.createRegion = createRegion;
//# sourceMappingURL=create.js.map