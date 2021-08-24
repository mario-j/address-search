import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Home } from '../models/home.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  search(address: string) {

    let params = new HttpParams().set('address', address);
    return this.http.get('http://localhost:3000/api/search', { params: params });
  }
}
