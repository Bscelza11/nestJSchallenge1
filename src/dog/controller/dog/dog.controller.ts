import { Controller, Get, Param } from '@nestjs/common';
import { DogService } from 'src/dog/service/dog/dog.service';

@Controller('dog')
export class DogController {
  constructor(private dogService: DogService) {}

  @Get(':dogId')
  find(@Param('dogId') dogId: number) {
    return this.dogService.find(dogId);
  }
}
