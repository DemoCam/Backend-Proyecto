import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocentesController } from './docentes.controller';
import { DocentesService } from './docentes.service';
import { Docente, DocenteSchema } from './schemas/docente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Docente.name, schema: DocenteSchema }]),
  ],
  controllers: [DocentesController],
  providers: [DocentesService],
})
export class DocentesModule {}