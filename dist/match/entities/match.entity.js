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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const typeorm_1 = require("typeorm");
let Match = class Match {
};
exports.Match = Match;
__decorate([
    (0, typeorm_1.Column)("uuid"),
    __metadata("design:type", String)
], Match.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("uuid", { name: "id_user_1" }),
    __metadata("design:type", String)
], Match.prototype, "idUser1", void 0);
__decorate([
    (0, typeorm_1.Column)("uuid", { name: "id_user_2" }),
    __metadata("design:type", String)
], Match.prototype, "idUser2", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { nullable: true }),
    __metadata("design:type", Object)
], Match.prototype, "data", void 0);
exports.Match = Match = __decorate([
    (0, typeorm_1.Entity)("match")
], Match);
//# sourceMappingURL=match.entity.js.map