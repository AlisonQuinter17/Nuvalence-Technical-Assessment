import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() totalPages!: number;
  @Output() selectedpage = new EventEmitter<number>();
  actualPage = 1;
  pages: number[] = [];

  ngOnInit(): void {
    this.updatePagesList();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalPages'] && changes['totalPages'].currentValue !== changes['totalPages'].previousValue) {
      this.updatePagesList();
    }
  }

  updatePagesList(): void {
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  changePage(pagina: number): void {
    this.actualPage = pagina;
    this.selectedpage.emit(this.actualPage);
  }

  previousPage(): void {
    if (this.actualPage > 1) {
      this.changePage(this.actualPage - 1);
    }
  }

  nextPage(): void {
    if (this.actualPage < this.totalPages) {
      this.changePage(this.actualPage + 1);
    }
  }
}

