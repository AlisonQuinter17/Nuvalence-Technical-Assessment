import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private path = 'https://randomuser.me/api/?seed=nuvalence&results=25';

  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get(this.path);
  }
}
