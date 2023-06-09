"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const client_1 = __importDefault(require("./client"));
const region_1 = __importDefault(require("./region"));
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.NUMBER, allowNull: false }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => client_1.default),
    (0, sequelize_typescript_1.Column)({ field: "fkClient" }),
    __metadata("design:type", Number)
], User.prototype, "fkClient", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => client_1.default, { foreignKey: "id", sourceKey: "fkClient" }),
    __metadata("design:type", client_1.default)
], User.prototype, "client", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => region_1.default),
    (0, sequelize_typescript_1.Column)({ field: "fkRegion" }),
    __metadata("design:type", Number)
], User.prototype, "fkRegion", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => region_1.default, { foreignKey: "id", sourceKey: "fkRegion" }),
    __metadata("design:type", region_1.default)
], User.prototype, "region", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "signUp", void 0);
User = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "User", timestamps: false })
], User);
exports.default = User;
//# sourceMappingURL=user.js.map