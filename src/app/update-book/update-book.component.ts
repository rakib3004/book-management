import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private bookService: BookService, private route: Router) { }
  givenBook = this.bookService.getBookToBeUpdated();
  books : Book[]=[];

  ngOnInit(): void {
  }


  updateBook(){
    console.log(this.givenBook);
    this.bookService.updateBook(this.givenBook);
    this.route.navigate([''])
  }

}
