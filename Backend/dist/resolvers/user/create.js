"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const createUser = async (parent, args, { db }, info) => {
    const created = (await db.sequelize.models.User.create({
        fkClient: args.input.fkClient,
        fkRegion: args.input.fkRegion,
        email: args.input.email,
        signUp: args.input.signUp
    }));
    return created;
};
exports.createUser = createUser;
//# sourceMappingURL=create.js.map