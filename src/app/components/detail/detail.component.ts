import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../services/books.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public books;
  public bookbyId;
  public author;
  public authorbyId;
  public publisher;
  public publisherbyId;
  public book_Author;
  publisherName: string;
  author_name: string;
  idnum: number;
  result: boolean;

  constructor(private route: ActivatedRoute, private bookService: BooksService, private router: Router) {
  }

  ngOnInit() {
    const urlid = (this.route.snapshot.params['id']);
    this.idnum = urlid;
    this.getBook(this.idnum);
  }
  getBook(idnum) {
    this.bookService.getBook(idnum).subscribe(
      data => {
        this.bookbyId = data;
        this.publisherName = this.bookbyId.publisher.name;
        this.author_name = this.bookbyId.authors.author_name;
      },
      err => console.error(err),
      () => console.log('Got Book')
    );
  }
  delete() {
    this.result = confirm('Are you sure you want to delete?');
    if (this.result) {
      alert('Deleted successfully');
      this.bookService.deleteBook(this.idnum).subscribe(
        () => console.log('Deleted successfully'),
        err => console.log(err)
      );
      this.getBooks();
      this.router.navigateByUrl('/list');
    }
  }

  update(id: number) {
    this.router.navigate(['/update', id]);
  }
  getBooks() {
    this.bookService.getBooks().subscribe(
      data => { this.books = data;
         },
      err => console.error(err),
      () => console.log('books loaded')
    );
  }

}
