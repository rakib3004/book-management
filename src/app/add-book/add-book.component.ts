import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor(private bookService: BookService, private route: Router) {}

  ngOnInit(): void {}

  newBook = new Book();
  addBook(newBook: Book) {
    console.log(newBook);
  }
}
