/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  find(dogId: number) {
    return `find is working, and the dogId parameter is ${dogId}`;
  }
}
