import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Section {

    @PrimaryColumn()
    id: number;

    @Column('text')
    discription: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    imgUrl: string;
}

@Entity()
export class Chiffre {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    count: string;
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    email: string;

    @Column('text')
    password: string;
}

// @Entity()
// export class Email {

//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column('text')
//     name: string;

//     @Column('text')
//     email: string;

//     @Column('text')
//     subject: string;

//     @Column('text')
//     message: string;

//     @Column()
//     @CreateDateColumn()
//     createdAt: Date;
// }
