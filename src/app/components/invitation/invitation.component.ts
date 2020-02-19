import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {fadeInUpOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.less'],
  animations: [
    fadeInUpOnEnterAnimation()
  ],
})
export class InvitationComponent implements OnInit {

  names = [];
  title: string;
  toAnimate = false;

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const timerForAnimation = setTimeout(() => this.toAnimate = true, 300);

    this.activatedRouter.queryParams
      .pipe(first())
      .subscribe((params) => {
        this.names = params.names.split(',');
        this.title = this.names.length > 1
          ? this.names.slice(0, this.names.length - 1).join(',') + ' и ' + this.names[this.names.length - 1]
          : this.names[0];
      });
  }

}
