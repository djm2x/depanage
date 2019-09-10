import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import { JsonController, Get, Res, Post, Body, Param, Put, Delete } from 'routing-controllers';
import { UserRepository } from '../repositories/UserRepository';

@JsonController('/users')
export class UserController {

  private service = Container.get(UserRepository);

  constructor() { }

  @Post()
  async login(@Body() model: any, @Res() response: Response) {
    try {
      const result = await this.service.login(model);
      console.log(result);
      return response.json(result);
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
