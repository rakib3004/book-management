import { Component, OnInit } from '@angular/core';
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

  deleteBook(bookName: string): void{
    for(var bookDelete of this.books){
      if(bookDelete.name==bookName){
        console.log("Delete the book: "+bookName);

      }
    }
  }

}
