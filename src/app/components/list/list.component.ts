import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public books;
  public b;
  public filteredBooks;
  searchText: string;
  pageNo = 1;

  constructor(private bookService: BooksService) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      data => {
        this.books = data;
        this.filteredBooks = data;
      },
      err => console.error(err),
      () => console.log('books loaded')
    );
  }

  performFilter(): void {
    if (this.searchText) {
      this.pageNo = 1;
      this.filteredBooks = this.books.filter(m => {
        return (m.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
          m.genre.toLowerCase().includes(this.searchText.toLowerCase()));
      });
    } else {
      this.filteredBooks = this.books;
    }
  }
}
