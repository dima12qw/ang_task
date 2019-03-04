import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  getItems() {
    return this.http.get(this.url + 'items');
  }

  getItem(code) {
    return this.http.get(this.url + 'items/' + code);
  }

  createItem(item: { id: string, name: string, description: string, active: boolean }) {
    return this.http.post(this.url + 'items', item);
  }

  updateItem(item: { id: string, name: string, description: string, active: boolean }) {
    return this.http.put(this.url + 'items/' + item.id, item);
  }

  deleteItem(itemId){
    return this.http.delete(this.url + 'items/' + itemId);
  }

}
