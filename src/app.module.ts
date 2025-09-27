import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocentesModule } from './docentes/docentes.module';

@Module({
  imports: [
    // Conexión básica a MongoDB
    MongooseModule.forRoot('mongodb://localhost:27017/docentes_db'),
    DocentesModule,
  ],
})
export class AppModule {}
