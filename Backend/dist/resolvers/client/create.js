"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const createClient = async (parent, args, { db }, info) => {
    const created = (await db.sequelize.models.Client.create({
        name: args.input.name,
        nickname: args.input.nickname,
        passwordHash: args.input.passwordHash,
        phone: args.input.phone,
        paymentDue: args.input.paymentDue
    }));
    return created;
};
exports.createClient = createClient;
//# sourceMappingURL=create.js.map