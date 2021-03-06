import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://mongoose_dev:1234@localhost/mongoose_tutorial_db',
      { useFindAndModify: false },
    ),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
