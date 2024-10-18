import { Injectable, BadRequestException } from '@nestjs/common';
import { DataDao } from './data.dao';

@Injectable()
export class AppService {

  constructor(
    private readonly dataDao: DataDao
  ){}

  // VM -- added methods for the service layer.
  // seemed like a good spot to add request validation for the 
  // write methods to prevent wonky data from being passed into 
  // the DAO layer
 

  async getAll(): Promise<any> {
    //return [{data: '123', otherData: '456'}]
    return await this.dataDao.getAll()
  }

  async getById(id: string): Promise<any>{
    return await this.dataDao.getById(id);
  }

  async getTestData(): Promise<any> {
    return await this.dataDao.getTestData();
  }

  async create(content: string): Promise<any> {
    if (typeof content !== 'string'){
      throw new BadRequestException("create: content param not a string");
    }
    return await this.dataDao.create(content);
  }

  async update(id: string, content: string): Promise<any>{
    if (typeof content !== 'string'){
      throw new BadRequestException("update: content param must be a string");
    }
    return await this.dataDao.update(id, content);
  }

  async delete(id: string): Promise<any> {
    return await this.dataDao.delete(id);
  }
}