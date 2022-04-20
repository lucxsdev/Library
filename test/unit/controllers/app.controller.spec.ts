import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../../src/controllers/app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();
  });

  describe('healthCheck', () => {
    it('should return status: "RUNNING"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.healthCheck()).toMatchObject({ status: "RUNNING" });
    });
  });
});
