"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.default = () => {
    // Primero leemos el archivo de configuración como un string
    const config = fs_1.default.readFileSync(path_1.default.join(__dirname, "../../localSettings.json"), "utf8");
    // Entonces lo convertimos en un json propiamente y lo retornamos
    return JSON.parse(config);
};
//# sourceMappingURL=globalConfig.js.map