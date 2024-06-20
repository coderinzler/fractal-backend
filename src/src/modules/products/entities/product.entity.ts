import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../../orders/entities/order.entity";


@Entity('product')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar',nullable:true})
    name: string;

    @Column({type:'varchar',nullable: true})
    description: string;

    @Column({type:'integer', nullable: true})
    unitPrice: number;

    @Column({type:'integer',nullable:true})
    quantity: number;

    @ManyToOne(() => Order, (order) => order.products)
    order: Order;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date;
}