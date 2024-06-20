import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService){}

    @Post('/')
    createProduct(@Body() createProduct: CreateProductDTO){
        return this.productService.createProduct(createProduct);
    }

    @Get('/')
    getAllProducts(){
        return this.productService.getAllProducts();
    }

    @Get('/:id')
    getProductById(@Param('id')id: string){
        return this.productService.getProductById(id);
    }

}
