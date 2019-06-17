import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ContentModule } from './content/content.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
 }), AuthModule, ContentModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
