import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Docente, DocenteDocument } from './schemas/docente.schema';
import { CreateDocenteDto } from './dto/create-docente.dto';

@Injectable()
export class DocentesService {
  constructor(
    @InjectModel(Docente.name) private docenteModel: Model<DocenteDocument>,
  ) {}

  async create(createDocenteDto: CreateDocenteDto): Promise<Docente> {
    try {
      const newDocente = new this.docenteModel(createDocenteDto);
      return await newDocente.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('La cédula ya está registrada');
      }
      throw error;
    }
  }

  async findAll(): Promise<Docente[]> {
    return this.docenteModel.find().exec();
  }

  async findByCedula(cedula: string): Promise<Docente | null> {
    return this.docenteModel.findOne({ cedula }).exec();
  }
}