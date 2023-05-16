"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const fs_1 = require("fs");
const mainDB_1 = require("./providers/mainDB");
const index_1 = require("./resolvers/index");
const logger_1 = require("./utils/logger");
const logger = (0, logger_1.getLogger)();
//  Obtenemos el schema de nuestro archivo .graphql
const typeDefs = (0, fs_1.readFileSync)("./schema.graphql").toString("utf-8");
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers: index_1.resolvers
});
//  Iniciamos el servidor y lo ponemos a escuchar en el puerto 4000
//  Nota: El servidor se inicia de forma asíncrona, por lo que debemos usar async/await
//  puesto que debido a configuraciones de NodeJS, no podemos usar promesas directamente
//  en el archivo principal.
const main = async () => {
    const db = new mainDB_1.mainDB();
    await db.connect();
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
        // Enviamos la instancia de la base de datos a los resolvers
        context: async () => ({ db })
    });
    logger.info(`🚀  Server ready at: ${url}`);
};
main();
//# sourceMappingURL=index.js.map