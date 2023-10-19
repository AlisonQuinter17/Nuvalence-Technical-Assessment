import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidebar: boolean = false;

  constructor(
    private contactService: UserService
  ) { }

  ngOnInit() {
    this.contactService.selectedContact$.subscribe(contact => {
      this.showSidebar = !!contact;
    });
  }
}
