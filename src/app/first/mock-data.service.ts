import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    let items = [
      {id: 'IT01', name: 'item1', description: 'item1', active: true},
      {id: 'IT02', name: 'item2', description: 'item2', active: false},
      {id: 'IT03', name: 'item3', description: 'item3', active: true},
      {id: 'IT04', name: 'item4', description: 'item4', active: false},
      {id: 'IT05', name: 'item5', description: 'item5', active: false},
      {id: 'IT06', name: 'item6', description: 'item6', active: true},
      {id: 'IT07', name: 'item7', description: 'item7', active: true}
    ];
    return {items};
  }
}
