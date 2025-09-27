import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { CreateDocenteDto } from './dto/create-docente.dto';

@Controller('api/docentes')
export class DocentesController {
  constructor(private readonly docentesService: DocentesService) {}

  @Post()
  create(@Body(ValidationPipe) createDocenteDto: CreateDocenteDto) {
    console.log('Recibiendo nuevo docente:', createDocenteDto);
    return this.docentesService.create(createDocenteDto);
  }

  @Get()
  findAll() {
    return this.docentesService.findAll();
  }

  @Get(':cedula')
  findOne(@Param('cedula') cedula: string) {
    return this.docentesService.findByCedula(cedula);
  }
}