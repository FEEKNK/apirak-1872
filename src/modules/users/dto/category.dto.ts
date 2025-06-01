import { ApiProperty } from "@nestjs/swagger";

export class CategoryDto {
    @ApiProperty({description: 'name', example: 'Groceries'})
    name: string;
    @ApiProperty({description: 'type', example: 'expense'})
    type: 'income' | 'expense';
    @ApiProperty({description: 'user ID', example: 1, required: true})
    userId: number; // Optional, as it may not be set during creation
}