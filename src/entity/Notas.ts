import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Usuario } from './Usuario';

@Entity()
export class Notas {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 30, nullable: false })
    title: string;

    @Column('text', { nullable: false })
    nota: string;

    @CreateDateColumn({ nullable: false })
    fecha: Date;

    @ManyToOne(_type => Usuario, user => user.notas, { nullable: false } )
    user: Usuario

}