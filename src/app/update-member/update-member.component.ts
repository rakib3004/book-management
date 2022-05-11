import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  constructor(private memberService: MemberService, private route: Router) { }
  givenMember = this.memberService.getMemberToBeUpdated();
  books : Member[]=[];

  ngOnInit(): void {
  }


  updateMember(){
    this.memberService.updateMember(this.givenMember);
    this.route.navigate(['members'])
  }

}
