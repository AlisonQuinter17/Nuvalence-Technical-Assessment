import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private path = 'https://randomuser.me/api/?seed=nuvalence&results=10';

  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get(this.path);
  }
}
