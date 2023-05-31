import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    enterpriseId: number

    @Column()
    userName: string

    @Column()
    email: string
    
    @Column()
    name: string
    
    @Column()
    function: string

    @CreateDateColumn()
    create_at: Date;

    @Column()
    city: string

    @Column()
    state: string
    
    @Column()
    country: string

}