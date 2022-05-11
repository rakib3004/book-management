import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(private memberService: MemberService, private route: Router) { }

  ngOnInit(): void {
  }
  newMember = new Member();
  addMember(newMember: Member) {
    this.memberService.addMember(newMember);
    this.route.navigate(['']);
  }

}
