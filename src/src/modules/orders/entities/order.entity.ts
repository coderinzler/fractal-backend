import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../products/entities/product.entity";

@Entity('order')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type:'integer',nullable: true})
    order: number;

    @OneToMany(() => Product, (product) => product.order)
    products: Product[]

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date;
}