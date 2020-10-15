import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Notas } from './Notas';

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 50, nullable: false })
    name: string;

    @Column('varchar', { length: 50, nullable: false })
    email: string;

    @Column('varchar', { length: 512, nullable: false })
    password: string;

    @Column('enum', { enum: ['ADMIN_ROLE', 'USER_ROLE'], default: 'USER_ROLE' })
    role: string;

    @Column('varchar', { nullable: true })
    img: string;

    @Column('bool', { default: false })
    google: boolean;

    @OneToMany(_type => Notas, nota => nota.user)
    notas: Notas[];

}