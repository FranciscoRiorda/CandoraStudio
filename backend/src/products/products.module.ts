import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // <-- Le avisamos a TypeORM que use esta entidad
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}