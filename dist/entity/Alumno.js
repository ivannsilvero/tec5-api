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
exports.Alumno = void 0;
const typeorm_1 = require("typeorm");
let Alumno = class Alumno {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Alumno.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('smallint', { nullable: false }),
    __metadata("design:type", Number)
], Alumno.prototype, "n_order", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 60, nullable: false }),
    __metadata("design:type", String)
], Alumno.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 10, nullable: false }),
    __metadata("design:type", String)
], Alumno.prototype, "dni", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 20, nullable: false }),
    __metadata("design:type", String)
], Alumno.prototype, "proviene", void 0);
__decorate([
    typeorm_1.Column('integer', { nullable: false }),
    __metadata("design:type", Number)
], Alumno.prototype, "legajo", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 10, nullable: true }),
    __metadata("design:type", String)
], Alumno.prototype, "l_y_f", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 15, nullable: false }),
    __metadata("design:type", String)
], Alumno.prototype, "telefono", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 10, nullable: true }),
    __metadata("design:type", String)
], Alumno.prototype, "pase_baja", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 20, nullable: true }),
    __metadata("design:type", String)
], Alumno.prototype, "observaciones", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 8, nullable: false }),
    __metadata("design:type", String)
], Alumno.prototype, "curso", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 20, nullable: false }),
    __metadata("design:type", String)
], Alumno.prototype, "especialidad", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 60, nullable: true }),
    __metadata("design:type", String)
], Alumno.prototype, "preceptor", void 0);
Alumno = __decorate([
    typeorm_1.Entity()
], Alumno);
exports.Alumno = Alumno;
//# sourceMappingURL=Alumno.js.map