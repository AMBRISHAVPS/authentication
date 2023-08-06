import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productSchema } from './entities/product.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    AuthModule,
    MongooseModule.forFeature([{ name: 'Product', schema: productSchema }]),
    HttpModule
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}







// @Module({
//   imports: [
//     AuthModule,
//     MongooseModule.forFeature([{ name: 'Book', schema: productSchema }]),
//   ],
//   controllers: [BookController],
//   providers: [BookService],
// })
// export class BookModule {}

