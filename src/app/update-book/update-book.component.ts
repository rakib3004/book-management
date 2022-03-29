import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private bookService: BookService) { }
  givenBook = this.bookService.getBookToBeUpdated();
  ngOnInit(): void {
 console.log(this.givenBook)
  }

}
