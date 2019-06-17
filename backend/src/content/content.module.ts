import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { Content } from './content.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Content])],
  providers: [ContentService],
  controllers: [ContentController]
})
export class ContentModule {}
