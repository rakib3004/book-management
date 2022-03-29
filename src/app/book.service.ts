import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [{id:1,name:"Java Programming",year:2004,availability:true},
                  {id:2,name:"Python Programming",year:2002,availability:false},
                  {id:3,name:"C Programming",year:2003,availability:true},
                  {id:4,name:"C++ Programming",year:2001,availability:false},
                  {id:5,name:"C# Programming",year:2007,availability:true},
                  {id:6,name:"Angular Programming",year:2006,availability:true},
                  {id:7,name:"React Programming",year:2011,availability:true},
                  {id:8,name:"Vue Programming",year:2014,availability:false},
                  {id:9,name:"Javascript Programming",year:2005,availability:false},
                  {id:10,name:"Typescript Programming",year:2015,availability:true}]
  constructor() { }

  getBooks(): Book[]{
    return this.books;
  }

  deleteBook(givenBook : Book): Book[]{

this.books = this.books.filter(book => givenBook.id!=book.id);
return this.books;
    
  }


  updateBook(givenBook : Book): Book[]{

    this.books = this.books.filter(book => givenBook.id!=book.id);
    return this.books;
        
      }

}
