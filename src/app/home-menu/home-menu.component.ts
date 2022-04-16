import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
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
    this.route.navigate(['']);
  }
}
