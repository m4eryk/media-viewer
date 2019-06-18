import { Controller,  Post, Get, Body } from '@nestjs/common';
import { ContentService } from './content.service';
import { Content } from './content.entity';

@Controller('content')
export class ContentController {
    constructor( private readonly contentService: ContentService){}

    @Post('getContent')
    async getContent(@Body() props): Promise<any> {
        console.log( props )
        return this.contentService.getContent(props.path,props.type);
    } 
}
