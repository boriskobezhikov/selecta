import { Review } from "src/review/reviews.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryColumn()
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