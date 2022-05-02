import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 22, name: 'Tamal' },
      { id: 21, name: 'Shruti' },
      { id: 12, name: 'Prudhvi Varma' },
      { id: 32, name: 'Navrang Pathak' },
      { id: 2, name: 'Badsha ' },
      { id: 3, name: 'Sejal ' },
      { id: 4, name: 'Raghu' },
      { id: 5, name: 'Avinash Kumar' },
      { id: 20, name: 'Kiara Aadwani' },
      { id: 7, name: 'Tammanah Bhatia' },
      { id: 25, name: 'Sarika ' },
      { id: 10, name: 'Bhavna' },
      { id: 8, name: 'Kanika Kapoor' },
      { id: 14, name: 'Sunny Deol' },
      { id: 13, name: 'Raj kumar' },
      { id: 33, name: 'Pankaj Tripathi' },
      { id: 29, name: 'Ranbeer Kapoor' },
      { id: 39, name: 'Alia Bhatt' },
      { id: 40, name: 'Raghu Swami' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
