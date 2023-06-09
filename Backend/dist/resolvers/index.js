"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const client_1 = require("./client");
const user_1 = require("./user");
const region_1 = require("./region");
const clientregion_1 = require("./clientregion");
exports.resolvers = {
    Query: {
        readClient: client_1.readClient,
        readUser: user_1.readUser,
        readRegion: region_1.readRegion,
        readClientRegion: clientregion_1.readClientRegion
    },
    Mutation: {
        createClient: client_1.createClient,
        deleteClient: client_1.deleteClient,
        updateClient: client_1.updateClient,
        createUser: user_1.createUser,
        deleteUser: user_1.deleteUser,
        updateUser: user_1.updateUser,
        createRegion: region_1.createRegion,
        deleteRegion: region_1.deleteRegion,
        updateRegion: region_1.updateRegion,
        createClientRegion: clientregion_1.createClientRegion,
        deleteClientRegion: clientregion_1.deleteClientRegion,
        updateClientRegion: clientregion_1.updateClientRegion
    }
};
//# sourceMappingURL=index.js.map