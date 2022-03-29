import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }
  books = this.bookService.getBooks();

  ngOnInit(): void {
  }

  deleteBook(book: Book){
    console.log(book)
    this.books=this.bookService.deleteBook(book);
  }

  updateBook(book: Book){
    console.log(book)
    this.books=this.bookService.updateBook(book);
  }

}
