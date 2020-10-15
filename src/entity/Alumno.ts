import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alumno {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('smallint', { nullable: false })
    n_order: number;
    
    @Column('varchar', { length: 60, nullable: false })
    nombre: string;
    
    @Column('varchar', { length: 10, nullable: false })
    dni: string;
    
    @Column('varchar', { length: 20, nullable: false })
    proviene: string;
    
    @Column('integer', { nullable: false })
    legajo: number;

    /**
     * Es nullable
     */
    @Column('varchar', { length: 10, nullable: true })
    l_y_f: string;

    @Column('varchar', { length: 15, nullable: false })
    telefono: string;

    /**
     * Es nullable
     */
    @Column('varchar', { length: 10, nullable: true })
    pase_baja: string;

    /**
     * Es nullable
     */
    @Column('varchar', { length: 20, nullable: true })
    observaciones: string;

    @Column('varchar', { length: 8, nullable: false })
    curso: string;

    @Column('varchar', { length: 20, nullable: false })
    especialidad: string;

    /**
     * Es nullable
     */
    @Column('varchar', { length: 60, nullable: true })
    preceptor: string;

}