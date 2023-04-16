import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('albums')
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Author: string;

    @Column()
    Name: string;
}