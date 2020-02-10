import { Genre } from './genre';

export interface Movie {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    genre: Genre
}
