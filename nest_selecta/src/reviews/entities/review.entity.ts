import { Like } from "src/likes/entities/like.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    album_id: number;

    @Column()
    text: string;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    date: Date;

    @ManyToOne(()=>User, (user) => user.reviews)
    @JoinColumn()
    user: User;

    @OneToMany(()=> Like, (like) => like.review)
    likes: Like[];
}
