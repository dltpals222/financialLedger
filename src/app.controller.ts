import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { AppService } from './app.service';
import { readdirSync } from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndex(@Res() res: Response): void {
    res.sendFile(join(__dirname, '..', '..', 'src', 'views', 'index.html'));
  }

  @Get('fl-dist/dist.js')
  getIndexJs(@Res() res: Response): void {
    res.setHeader('content-type', 'application/javascript');
    res.sendFile(join(__dirname, '..', '..', 'fl-dist', 'dist.js'));
  }
}
const viewDirectory = join(__dirname, '..', '..', 'src', 'views');
const test = readdirSync(viewDirectory);
console.dir(test);
