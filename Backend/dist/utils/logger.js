"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
const typescript_logging_category_style_1 = require("typescript-logging-category-style");
const typescript_logging_1 = require("typescript-logging");
const globalConfig_1 = __importDefault(require("./globalConfig"));
const getLoggingLevel = () => {
    const cfg = (0, globalConfig_1.default)();
    const level = cfg.logger.level.toLowerCase();
    switch (level) {
        case "trace":
            return typescript_logging_1.LogLevel.Trace;
        case "debug":
            return typescript_logging_1.LogLevel.Debug;
        case "info":
            return typescript_logging_1.LogLevel.Info;
        case "warn":
            return typescript_logging_1.LogLevel.Warn;
        case "error":
            return typescript_logging_1.LogLevel.Error;
        case "fatal":
            return typescript_logging_1.LogLevel.Fatal;
        case "off":
            return typescript_logging_1.LogLevel.Off;
        default:
            provider
                .getCategory("mainLogger")
                .warn("Invalid logging level, defaulting to info");
            return typescript_logging_1.LogLevel.Info;
    }
};
const provider = typescript_logging_category_style_1.CategoryProvider.createProvider("mainLogger", {
    level: getLoggingLevel()
});
function getLogger(name) {
    return provider.getCategory(name ?? "mainLogger");
}
exports.getLogger = getLogger;
//# sourceMappingURL=logger.js.map