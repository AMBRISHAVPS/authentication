import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('product')
export class ProductController {
  constructor(private  productService: ProductService) {}
 
  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  findOne(@Param('id') id: string) {
    return this.productService.getById(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createall(createProductDto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Patch('purchase/:userId/:purchaseId')
  @UseGuards(AuthGuard())
  updateIsAvailable(@Param('userId') userId: string, @Param('purchaseId') purchaseId: string){
    return this.productService.purchase(userId,purchaseId);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string) {
    return this.productService.delete(id);
  }

}
