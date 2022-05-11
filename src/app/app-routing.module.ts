import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateMemberComponent } from './update-member/update-member.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'books', component:BookListComponent},
  {path:'updateBook', component:UpdateBookComponent},
  {path:'updateMember', component:UpdateMemberComponent},
  {path:'addBook', component:AddBookComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'members', component:MemberListComponent},
  {path:'addMember', component:AddMemberComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
