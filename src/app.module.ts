import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocentesModule } from './docentes/docentes.module';

@Module({
  imports: [
    // Conexión a MongoDB usando variable de entorno
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/docentes_db'
    ),
    DocentesModule,
  ],
})
export class AppModule {}
