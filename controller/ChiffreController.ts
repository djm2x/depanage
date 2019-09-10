import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import { JsonController, Get, Res, Post, Body, Param, Put, Delete } from 'routing-controllers';
import { ChiffreRepository } from '../repositories/ChiffreRepository';

@JsonController('/chiffres')
export class ChiffreController {

  private service = Container.get(ChiffreRepository);

  constructor() { }

  @Get()
  async getAll(@Res() response: Response) {
    try {
      return response.json(await this.service.getAll());
    } catch (error) {
      return response.json(error);
    }
  }

  // @Post('/save')
  // async insertOrUpdate(@Body() model: any, @Res() response: Response) {
  //   try {
  //     return response.json(await this.service.insertOrUpdate(model));
  //   } catch (error) {
  //     return response.json(error);
  //   }
  // }

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
