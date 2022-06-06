import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {
  

  constructor(private bookService: BookService, private route: Router) { }
  searchString:string="";
  books: Book[] = [];
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  searchBook(): void {
    if(this.searchString=="") {
      this.books = this.bookService.getBooks();
    }
    else {
      this.books = this.books.filter(book => book.name.toLowerCase() == this.searchString.toLowerCase());
      if(this.books.length==0) {
        alert("No book found");
      }
    }
  }

  clearSearch(): void {
    this.searchString = "";
    this.books = this.bookService.getBooks();
  }

  viewAboutUs(){
    this.route.navigate(['aboutUs']);
  }
  viewHome(){
    this.route.navigate(['']);
  }
  viewBooks(){
    this.route.navigate(['books']);
  }
  viewMembers(){
    this.route.navigate(['members']);
  }
  viewHistory(){
    this.route.navigate(['history']);
  }
}
