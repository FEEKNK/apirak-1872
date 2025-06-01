import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { CategoriesService } from './category.service';
import { CategoryDto } from '../users/dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly service: CategoriesService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }
  
  @Post()
  create(@Body() body: CategoryDto) {
    return this.service.create(body);
  }
  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
      return this.service.findByUser(+userId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<CategoryDto>) {
      return this.service.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
      return this.service.remove(+id);
  }
}

