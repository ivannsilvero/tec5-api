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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const Notas_1 = require("./Notas");
let Usuario = class Usuario {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 50, nullable: false }),
    __metadata("design:type", String)
], Usuario.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 50, nullable: false }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 512, nullable: false }),
    __metadata("design:type", String)
], Usuario.prototype, "password", void 0);
__decorate([
    typeorm_1.Column('enum', { enum: ['ADMIN_ROLE', 'USER_ROLE'], default: 'USER_ROLE' }),
    __metadata("design:type", String)
], Usuario.prototype, "role", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "img", void 0);
__decorate([
    typeorm_1.Column('bool', { default: false }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "google", void 0);
__decorate([
    typeorm_1.OneToMany(_type => Notas_1.Notas, nota => nota.user),
    __metadata("design:type", Array)
], Usuario.prototype, "notas", void 0);
Usuario = __decorate([
    typeorm_1.Entity()
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map