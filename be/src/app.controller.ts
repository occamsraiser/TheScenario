import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("data") // "data" should be prepended with "API" for clarity, but left it alone
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GET w/o path params will return all objects in db
  @Get()
  async getAll() {
    return this.appService.getAll();
  }

  // GET hardcoded dummy data
  @Get('testdata')
  async getTestData() {
    return this.appService.getTestData();
  }

  // GET with an ID in the path will return the matching object, if found
  @Get(':id')
  async getById(@Param('id') id: string){
    return this.appService.getById(id);
  }

  // POST with payload will stringify that payload and create a new content object to house it
  @Post()
  async create(@Body() payload: object){
    let stringifiedPayload = JSON.stringify(payload);
    return this.appService.create(stringifiedPayload);
  }

  // POST to the endpoint with an id in the URI will update the matching object's content
  @Post(':id')
  async update( @Param('id') id: string, @Body() payload: object){
    let stringifiedPayload = JSON.stringify(payload);
    return this.appService.update(id, stringifiedPayload);
  }

  // DELETE with an id in the URI will delete the matching object, if found
  @Delete(':id')
  async delete( @Param('id') id: string){
    return this.appService.delete(id);
  }

}
