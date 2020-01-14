import { Test, TestingModule } from '@nestjs/testing';
import { GoogleControllerController } from './google.controller';

describe('GoogleController Controller', () => {
  let controller: GoogleControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleControllerController],
    }).compile();

    controller = module.get<GoogleControllerController>(
      GoogleControllerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
