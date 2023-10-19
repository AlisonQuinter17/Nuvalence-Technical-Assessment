import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  selectedContact: any;
  birthday = '';

  constructor(
    private contactService: UserService
  ) { }

  ngOnInit(): void {
    let data = sessionStorage.getItem("selectedContact");
    if (data) {
      this.selectedContact = JSON.parse(data);
      this.birthday = this.selectedContact.dob.date.split('T')[0];
    } else {
      this.getUserData();
    }
  }

  getUserData() {
    this.contactService.selectedContact$.subscribe(contact => {
      if (contact) {
        this.selectedContact = contact;
        this.birthday = contact.dob.date.split('T')[0];
        console.log('this.selectedContact: ', this.selectedContact)
        sessionStorage.setItem('selectedContact', JSON.stringify(contact));
      }
    });
  }

}
