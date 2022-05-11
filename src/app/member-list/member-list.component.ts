import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  constructor(private memberService: MemberService, private router: Router) {}
  members: Member[] = [];
  ngOnInit(): void {
    this.members = this.memberService.getMembers();
  }

  removeMember(member: Member) {
    this.members = this.memberService.removeMember(member);
  }

  updateMember(member: Member, index: number) {
   
    this.memberService.setMemberToBeUpdated(member, index);
    this.router.navigate(['updateMember']);
  }

  addMember() {

    this.router.navigate(['addMember']);
  }
}
