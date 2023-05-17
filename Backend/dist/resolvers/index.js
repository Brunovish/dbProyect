"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const client_1 = require("./client");
exports.resolvers = {
    Query: {
        readClient: client_1.readClient,
    },
    Mutation: {
        createClient: client_1.createClient,
        deleteClient: client_1.deleteClient,
        updateClient: client_1.updateClient,
    }
};
//# sourceMappingURL=index.js.map