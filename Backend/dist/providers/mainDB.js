"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainDB = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const globalConfig_1 = __importDefault(require("../utils/globalConfig"));
const logger_1 = require("../utils/logger");
const index_1 = __importDefault(require("../models/index"));
const logger = (0, logger_1.getLogger)();
class mainDB {
    constructor() {
        const cfg = (0, globalConfig_1.default)().db;
        this.sequelize = new sequelize_typescript_1.Sequelize(cfg.database, cfg.user, cfg.password, {
            host: cfg.host,
            port: cfg.port,
            dialect: "mysql",
            logging(sql) {
                logger.debug(`SQL: ${sql}`);
            }
        });
        this.sequelize.addModels(Object.values(index_1.default));
    }
    async connect() {
        try {
            await this.sequelize.sync();
            await this.sequelize.authenticate();
            logger.debug("Connection has been established successfully.");
        }
        catch (error) {
            logger.error("Unable to connect to the database:", error);
        }
    }
}
exports.mainDB = mainDB;
//# sourceMappingURL=mainDB.js.map