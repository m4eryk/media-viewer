import { Controller,  Post, Get, Body } from '@nestjs/common';
import { ContentService } from './content.service';
import { Content } from './content.entity';

@Controller('content')
export class ContentController {
    constructor( private readonly contentService: ContentService){}

    @Get('getContent')
    async login(): Promise<any> {
        return this.contentService.getContent('../public/content/');
    } 
}
