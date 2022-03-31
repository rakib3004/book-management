import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService, private router : Router) { }
books : Book[]=[];
  ngOnInit(): void {
    this.books = this.bookService.getBooks();

  }

  deleteBook(book: Book){
    console.log(book)
    this.books=this.bookService.deleteBook(book);
  }

  updateBook(book: Book, index:number){
    console.log(book)
    this.bookService.setBookToBeUpdated(book,index);
    this.router.navigate(['updateBook'])
  }

  addBook(){
    this.bookService.addBook();
  }

}
