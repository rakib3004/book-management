import { Component, OnInit } from '@angular/core';
import { History } from '../history';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }
histories: History[]=[

  {title:"Biomedicine: Crash Course History of Science #34",action:"read",date:"14 May 2022", time:"02:04:02"},
  {title:"Five reasons the Middle East is in crisis - Newsnight",action:"fav list",date:"12 May 2022", time:"11:11:11"},
  {title:"Introduction: Crash Course U.S. Government and Politics",action:"read",date:"8 May 2022", time:"07:02:08"},
  {title:"How & What Animals Eat: Crash Course Zoology #4",action:"rating",date:"4 May 2022", time:"06:04:08"},
  {title:"Dictator's Dilemma (Full Episode) | North Korea: Inside the Mind of a Dictator",action:"read",date:"31 April 2022", time:"13:02:12"},
  {title:"Florence and the Renaissance: Crash Course European History #2",action:"rating",date:"24 April 2022", time:"16:04:08"}

];

  ngOnInit(): void {
  }

}
