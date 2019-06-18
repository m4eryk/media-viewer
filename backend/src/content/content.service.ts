import { Injectable } from '@nestjs/common';
import { Content } from './content.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import * as mime from 'mime-types'
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ContentService {

    constructor( 
        @InjectRepository(Content)
        private contentRepository: Repository<Content> ) 
    { }

    public async getContent(path,type){
        let content = await this.checkContent(path)
        return this.create(content,type)
    }


    private async checkContent(path): Promise<Object[]>{
        var value= []
        fs.readdirSync(path).forEach(file => {
            if(mime.lookup(file) == 'video/mp4'){
              value.push({ name: file, path : '/content/'+file, type: 'mp4'})
            }
            else if(mime.lookup(file) == 'audio/mpeg'){
              value.push({ name: file, path : '/content/'+file, type: 'mp3'})
            }
            else if(mime.lookup(file) == 'image/jpeg'){
              value.push({ name: file, path : '/content/'+file, type: 'jpeg'})
            }
        });
        return value
    }

    private async create(content: object[], type){

        
        for( let i=0 ; i < content.length ; i++){
            
            let cnt = new Content();
            cnt.name=content[i]['name'];
            cnt.path=content[i]['path'];
            cnt.type=content[i]['type'];
            let a = await this.contentRepository.findOne({
                where: {
                    name : cnt.name
                }
            })

            if( typeof(a) == 'undefined' ){
                await this.contentRepository.save(cnt);
            }
            
        }
        return await this.contentRepository.find({
            where: {
                type : type
            }
        })
    }
}
