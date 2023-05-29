import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";
import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> User, (user) => user.likes)
    @JoinColumn()
    user: User;

    @ManyToOne(()=> Review, (review) => review.likes)
    @JoinColumn()
    review: Review;
}
