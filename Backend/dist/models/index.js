"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
const user_1 = __importDefault(require("./user"));
const region_1 = __importDefault(require("./region"));
const clientregion_1 = __importDefault(require("./clientregion"));
exports.default = {
    Client: client_1.default,
    User: user_1.default,
    Region: region_1.default,
    ClientRegion: clientregion_1.default
};
//# sourceMappingURL=index.js.map