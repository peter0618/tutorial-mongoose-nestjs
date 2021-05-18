import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto, UpdateCatDto } from './dto/cat.dto';
import { Cat, CatDocument } from './schema/cat.schema';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findById(id: string): Promise<Cat> {
    return this.catModel.findById(id);
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, updateCatDto, { new: true });
  }

  async delete(id: string): Promise<Cat> {
    // throw new Error('Method not implemented.');
    return this.catModel.findByIdAndDelete(id);
  }
}
