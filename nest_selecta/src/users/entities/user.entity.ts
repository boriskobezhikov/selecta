import { Like } from "src/likes/entities/like.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    login: string;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @OneToMany(() => Like, (like) => like.user)
    likes: Like[];

    @OneToMany(()=>Review, (review) => review.user) 
    reviews: Review[];
}
