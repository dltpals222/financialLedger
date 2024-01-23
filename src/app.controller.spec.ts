import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { response } from 'express';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getIndex(response)).toBe('Hello World!');
    });
  });
});
