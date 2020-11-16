import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('student')
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
}
