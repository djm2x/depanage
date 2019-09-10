import { NextFunction, Request, Response } from 'express';
import { SectionRepository } from '../repositories/SectionRepository';
import Container from 'typedi';
import { JsonController, Get, Res, Post, Body, Param, Put, Delete } from 'routing-controllers';

@JsonController('/sections')
export class SectionController {

  private service = Container.get(SectionRepository);

  constructor() { }

  @Get('/get/values')
  getValues(@Res() response: Response) {
    return [{ val: 'me' }, { val: 'you' }];
  }

  @Get()
  async getAll(@Res() response: Response) {
    console.log('getAll');
    try {
      return response.json(await this.service.getAll());
    } catch (error) {
      return response.json(error);
    }
  }

  @Post('/save')
  async insertOrUpdate(@Body() model: any, @Res() response: Response) {
    try {
      return response.json(await this.service.insertOrUpdate(model));
    } catch (error) {
      return response.json(error);
    }
  }

  @Post()
  async post(@Body() model: any, @Res() response: Response) {
    try {
      return response.json(await this.service.post(model));
    } catch (error) {
      return response.json(error);
    }
  }

  @Get('/:id')
  async getOne(@Param('id') id: string, @Res() response: Response) {
    console.log('getOne');
    try {
      return response.json(await this.service.findById(id));
    } catch (error) {
      return response.json(error);
    }
  }

  @Put('/:id')
  async put(@Param('id') id: string, @Body() model: any, @Res() response: Response) {
    // console.log(id);
    try {
      return response.json(await this.service.put(id, model));
    } catch (error) {
      return response.json(error);
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string, @Res() response: Response) {
    try {
      return response.json(await this.service.delete(id));
    } catch (error) {
      return response.json(error);
    }
  }
}
