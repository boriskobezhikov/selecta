import { User } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    reviewId: number;

    @Column()
    rating: number;

    @Column()
    message: string;

    @ManyToOne(type => User, user => user.review)
    @JoinColumn({
        name: 'userId'
    })
    user: User;

    @Column({nullable: false})
    login: string;

    @Column({nullable: false})
    albumId: number;
}