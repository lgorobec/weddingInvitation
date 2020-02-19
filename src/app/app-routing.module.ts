import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LetterComponent} from './components/letter/letter.component';
import {InvitationComponent} from './components/invitation/invitation.component';


const routes: Routes = [
  { path: 'letter/:names', component: LetterComponent },
  { path: 'invitation', component: InvitationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
