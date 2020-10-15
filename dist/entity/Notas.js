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
exports.Notas = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("./Usuario");
let Notas = class Notas {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Notas.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 30, nullable: false }),
    __metadata("design:type", String)
], Notas.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], Notas.prototype, "nota", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ nullable: false }),
    __metadata("design:type", Date)
], Notas.prototype, "fecha", void 0);
__decorate([
    typeorm_1.ManyToOne(_type => Usuario_1.Usuario, user => user.notas, { nullable: false }),
    __metadata("design:type", Usuario_1.Usuario)
], Notas.prototype, "user", void 0);
Notas = __decorate([
    typeorm_1.Entity()
], Notas);
exports.Notas = Notas;
//# sourceMappingURL=Notas.js.map