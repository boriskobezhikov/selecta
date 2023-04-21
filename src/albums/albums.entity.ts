import { Review } from "src/review/reviews.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('albums')
export class Album {
    @PrimaryGeneratedColumn()
    albumId: number;

    @Column()
    author: string;

    @Column()
    name: string;

    @Column({nullable: true})
    image: string;

    @OneToMany(() => Review, (review) => review.album)
    review: Review[]
}