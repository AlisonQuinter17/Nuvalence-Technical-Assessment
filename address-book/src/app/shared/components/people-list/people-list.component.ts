import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  searchTerm: string = '';

  constructor(
    private dataList: DataService,
    private contactService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clearCache();
    this.getAllData();
  }

  getAllData() {
    this.dataList.getAllUsers().subscribe((response: any) => {
      this.data = response.results;
      console.log('Response: ', this.data);
      this.filteredData = this.data;
    })
  }

  filterData() {
    this.filteredData = this.data.filter(user => {
      const itemToSearch = [
        user.name.title,
        user.name.first,
        user.name.last,
        user.nat,
        user.phone,
        user.email
      ];
      return itemToSearch.some(data => data.toLowerCase().includes(this.searchTerm.toLowerCase()));
    });
  }

  onContactSelected(contact: any) {
    if (window.innerWidth <= 768) {
      this.contactService.setSelectedContact(contact);
      this.router.navigate(['details/:id'])
    } else {
      this.contactService.setSelectedContact(contact);
    }
  }

  clearCache() {
    sessionStorage.removeItem('selectedContact');
  }
}
