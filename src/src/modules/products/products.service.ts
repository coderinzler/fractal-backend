import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Order } from '../orders/entities/order.entity';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>, @InjectRepository(Order) private readonly orderRepository: Repository<Order>){}

    async createProduct(createProductDTO: CreateProductDTO){
        try {
            return await this.productRepository.save(createProductDTO);
        }catch(error){
            throw new BadRequestException(error.message);
        }
    }

    async getAllProducts(): Promise<Product[]>{
        try {
            return await this.productRepository.find();
        }catch(error){
            throw new BadRequestException(error.message);
        }
    }

    async getProductById(id: string): Promise<Product>{
        try{
            return await this.productRepository.findOne({where: {id}});
        }catch(error){
            throw new BadRequestException(error.message);
        }
    }

}
