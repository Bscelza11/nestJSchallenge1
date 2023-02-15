import { Module } from '@nestjs/common';
import { DogController } from './controller/dog/dog.controller';
import { DogService } from './service/dog/dog.service';

@Module({
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
