import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Books} from '../components/domain/domain';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {
  }

  getBook(idnum: number): Observable<Books> {
    return this.http.get<Books>('/server/api/v1/books/' + idnum);
  }

  getPublisher(id: number) {
    return this.http.get('/server/api/v1/publisher/' + id);
  }

  getAuthor(id: number) {
    return this.http.get('/server/api/v1/authors/' + id);
  }

  getBook_authors(id: number) {
    return this.http.get('/server/api/v1/book_authors/' + id);
  }

  deleteBook(id: number) {
    return this.http.delete('/server/api/v1/books/delete/' + id);
  }

  getBooks() {
    return this.http.get('/server/api/v1/books');
  }

  getAuthors() {
    return this.http.get('/server/api/v1/authors');
  }

  getPublishers() {
    return this.http.get('/server/api/v1/publisher');
  }

  createBook(book: Books): Observable<Books> {
    // const body = JSON.stringify(book);
    return this.http.post<Books>('/server/api/v1/books', book, httpOptions);
  }

  updateBook(book: Books): Observable<Books> {
    // const body = JSON.stringify(book);
    return this.http.put<Books>('/server/api/v1/books', book, httpOptions);
  }

  createAuthor(author) {
    const body = JSON.stringify(author);
    return this.http.post('/server/api/v1/authors', body, httpOptions);
  }

  createPublisher(bookpublisher) {
    const body = JSON.stringify(bookpublisher);
    return this.http.post('/server/api/v1/publisher', body, httpOptions);
  }
}
