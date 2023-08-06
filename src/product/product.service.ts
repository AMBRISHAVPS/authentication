import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Product } from './entities/product.entity';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: mongoose.Model<Product>,
    private readonly httpService: HttpService,
  ) {}

  async getAll() {
    return this.productModel.find({ isAvailable: true });
  }

  async getById(id: string) {
    return await this.productModel.findById(id);
  }

  async createall(createProductDto: CreateProductDto) {
    const res = await this.productModel.create(createProductDto);
    return res;
  }

  async update(id: string, update: UpdateProductDto) {
    console.log(update);
    return await this.productModel.findByIdAndUpdate(id, update);
  }

  async purchase(userId: string,purchaseId: string ) {
     await this.httpService.patch(
      `http://localhost:3000/auth/${userId}/${purchaseId}`,
    );
    return await this.productModel.findByIdAndUpdate(purchaseId, { isAvailable: false });
    
  }

  async delete(id: string) {
    return await this.productModel.findByIdAndRemove(id);
  }
}
