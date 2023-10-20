import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  selectedContact: any;
  birthday = '';
  resizeSubscription: any;

  constructor(
    private contactService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.resizeSubscription = this.onResize.bind(this);
    window.addEventListener('resize', this.resizeSubscription);
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
        sessionStorage.setItem('selectedContact', JSON.stringify(contact));
      }
    });
  }

  onResize(event: any) {
    if (event.target.innerWidth >= 991) {
      this.router.navigate(['/people-list']);
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeSubscription);
  }

}
