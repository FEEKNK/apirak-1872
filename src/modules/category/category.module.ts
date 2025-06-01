import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoriesService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],  
  controllers: [CategoryController],
  providers: [CategoriesService],
})
export class CategoryModule {}
