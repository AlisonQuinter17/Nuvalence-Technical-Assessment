import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
  splittedData: any[] = [];
  searchTerm: string = '';
  actualPage: number = 0;
  totalPaginas$ = new BehaviorSubject<number>(0);

  constructor(
    private dataList: DataService,
    private contactService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clearCache();
    this.getList();
  }

  getList() {
    this.dataList.getAllUsers().subscribe((response: any) => {
      this.data = response.results;
      this.filteredData = this.data;
      this.splitData(10, this.filteredData);
      this.pageUpdate(1);
    })
  }

  onContactSelected(contact: any) {
    if (window.innerWidth <= 991) {
      this.contactService.setSelectedContact(contact);
      this.router.navigate(['details'])
    } else {
      this.contactService.setSelectedContact(contact);
    }
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
    this.splitData(10, this.filteredData);
    this.actualPage = 0;
  }

  splitData(pageNumber: number, existData?: { name: { last: string } }[]) {
    this.splittedData = [];

    if (!existData || !existData.length) return;
    existData.sort((a, b) => a.name.last.localeCompare(b.name.last));
  
    let index = 0;
    while (index < existData.length) {
      this.splittedData.push(existData.slice(index, index + pageNumber));
      index += pageNumber;
    }
    this.totalPaginas$.next(this.splittedData.length);
  }  

  pageUpdate(pageNumber: number) {
    this.actualPage = pageNumber - 1;
  }

  clearCache() {
    sessionStorage.removeItem('selectedContact');
  }
}
