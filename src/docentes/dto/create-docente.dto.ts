import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateDocenteDto {
  @IsNotEmpty({ message: 'La cédula es requerida' })
  cedula: string;

  @IsNotEmpty({ message: 'El nombre completo es requerido' })
  nombreCompleto: string;

  @IsEmail({}, { message: 'El correo debe ser válido' })
  correoElectronico: string;

  @IsOptional()
  telefono?: string;

  @IsOptional()
  departamento?: string;

  @IsOptional()
  tituloAcademico?: string;
}