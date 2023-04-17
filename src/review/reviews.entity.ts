import { Album } from "src/albums/albums.entity";
import { User } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    message: string;

    @ManyToOne(() => User, (user) => user.reviews)
    user: User

    @ManyToOne(() => Album, (album) => album.reviews)
    album: Album
}