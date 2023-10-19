import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private selectedContactSubject = new BehaviorSubject<any>(null);
  selectedContact$ = this.selectedContactSubject.asObservable();

  setSelectedContact(contact: any) {
    this.selectedContactSubject.next(contact);
  }
}
