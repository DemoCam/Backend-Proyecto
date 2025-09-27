import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateDocenteDto {
  @IsNotEmpty()
  @IsString()
  cedula: string;

  @IsNotEmpty()
  @IsString()
  nombreCompleto: string;

  @IsNotEmpty()
  @IsEmail()
  correoElectronico: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;

  @IsOptional()
  @IsString()
  departamento?: string;

  @IsOptional()
  @IsString()
  tituloAcademico?: string;
}