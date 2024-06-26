import { Module } from '@nestjs/common';
import { OrdersModule } from './src/modules/orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './src/modules/products/products.module';

@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type:'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: true,
  }),OrdersModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
