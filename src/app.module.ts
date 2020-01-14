import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleController } from './google/google.controller';
import { TwitterController } from './twitter/twitter.controller';

@Module({
  imports: [],
  controllers: [AppController, GoogleController, TwitterController],
  providers: [AppService],
})
export class AppModule {}
