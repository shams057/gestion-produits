import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
    constructor(private readonly Service: ProductsService) {}
    @Get()
    findAll() {
        return this.Service.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.Service.findOne(+id);
    }
}
