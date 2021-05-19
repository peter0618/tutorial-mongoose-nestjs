import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://mongoose_dev:1234@localhost/mongoose_tutorial_db',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
