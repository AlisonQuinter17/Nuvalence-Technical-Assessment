import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  selectedContact: any;
  birthday = '';

  constructor(
    private contactService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.contactService.selectedContact$.subscribe(contact => {
      if (contact) {
        this.selectedContact = contact;
        this.birthday = contact.dob.date.split('T')[0];
        console.log('this.selectedContact: ', this.selectedContact)
      }
    });
  }
}
