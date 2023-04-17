import { Review } from "src/review/reviews.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('albums')
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Author: string;

    @Column()
    Name: string;

    @OneToMany(() => Review, (review) => review.album)
    reviews: Review[]
}