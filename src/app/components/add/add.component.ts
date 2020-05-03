import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../services/books.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Books, emptyBook} from '../domain/domain';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  validMessage = ' ';
  genre: string[] = [
    'Action & Adventure',
    'Romance',
    'Thriller',
    'Science Fiction',
    'Biography',
    'Drama',
    'Fantasy',
    'Historical Fiction',
    'Horror'
  ];
  bookForm: FormGroup;
  idnum: number;
  public publisher;
  book: Books;

  constructor(private bookService: BooksService, private route: ActivatedRoute, private router: Router) {
    this.book = Object.assign({}, emptyBook());
  }


  ngOnInit() {
    this.idnum = (this.route.snapshot.params['id']);
    if (this.idnum) {
      this.getBook(this.idnum);
    }
    this.bookForm = new FormGroup({
        title: new FormControl('', Validators.required),
        genre: new FormControl('', Validators.required),
        rating: new FormControl('', Validators.required),
        description: new FormControl(),
        name: new FormControl('', Validators.required),
        author_name: new FormControl('', Validators.required),
        book_id: new FormControl(this.idnum)
      }
    );
  }

  submitRegistration() {
    if (this.bookForm.valid) {
      if (this.idnum) {
        // update case
        this.bookService.updateBook(this.book).subscribe(
          data => {
            this.book = data;
            this.bookForm.reset();
            this.validMessage = 'The book is updated successfully. Thank you';
          }
        );
        return;
      } else {
        this.bookService.createBook(this.book).subscribe(
          data => {
            this.book = data;
            this.bookForm.reset();
            this.validMessage = 'The book is added successfully. Thank you';
            return true;
          },
          err => {
            console.log(err);
          }
        );
      }
    } else {
      this.validMessage = 'Please fill out the form before submitting';
    }
  }

  goBack(id: number) {
    if (id == null) {
      this.router.navigate(['/list']);
    } else {
      this.router.navigate(['/detail', id]);
    }
  }

  getBook(idnum) {
    console.log('in getBook');
    this.bookService.getBook(idnum).subscribe(
      data => {
        this.book = data;
      },
      err => console.error(err)
    );
  }
}
