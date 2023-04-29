import { Review } from "src/review/reviews.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    login: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({nullable: true})
    profile_image: string;

    @OneToMany(() => Review, (review) => review.user)
    review: Review[]
}