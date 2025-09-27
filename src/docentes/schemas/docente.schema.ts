import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DocenteDocument = Docente & Document;

@Schema({ timestamps: true })
export class Docente {
  @Prop({ required: true, unique: true })
  cedula: string;

  @Prop({ required: true })
  nombreCompleto: string;

  @Prop({ required: true })
  correoElectronico: string;

  @Prop()
  telefono: string;

  
  @Prop({ required: false })
  departamento?: string;

  @Prop({ required: false })
  tituloAcademico?: string;
}

export const DocenteSchema = SchemaFactory.createForClass(Docente);