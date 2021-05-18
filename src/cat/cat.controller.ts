import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto, UpdateCatDto } from './dto/cat.dto';
import { Cat } from './schema/cat.schema';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  /**
   * Cat을 추가합니다.
   *
   * @param createCatDto
   * @returns
   */
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return await this.catService.create(createCatDto);
  }

  /**
   * Cat 전체 목록을 조회합니다.
   * @returns
   */
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  /**
   * Cat을 id로 식별하여 조회합니다.
   * @param id
   * @returns
   */
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Cat> {
    return await this.catService.findById(id);
  }

  /**
   * Cat의 정보를 수정합니다.
   * @param updateCatDto
   * @returns
   */
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<Cat> {
    return await this.catService.update(id, updateCatDto);
  }

  /**
   * Cat을 삭제합니다.
   * @param id
   * @returns
   */
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Cat> {
    return this.catService.delete(id);
  }
}
