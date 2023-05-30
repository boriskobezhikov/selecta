import IUser from "./IUser";

interface IReview {
    login: string; 
    id: number;
    album_id: number;
    text: string;
    date: string;
    userId: number;
}

export default IReview;