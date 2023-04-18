import { Review } from "src/review/reviews.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    login: string;

    @Column()
    password: string;

    @OneToMany(() => Review, (review) => review.user)
    review: Review[]
}