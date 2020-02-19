import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {bounceInLeftOnEnterAnimation, flashOnEnterAnimation, shakeOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.less'],
  animations: [
    shakeOnEnterAnimation(),
    bounceInLeftOnEnterAnimation(),
  ],
})
export class LetterComponent implements OnInit {

  isActive = false;
  isOpening = false;
  paramsForRedirect = {};

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(first())
      .subscribe((params) => {
        this.paramsForRedirect = params;
    });
  }

  openLetter(): void {
    this.isActive = true;
    const timerForStyles = setTimeout(() => {
      this.isOpening = true;
      const timerForRedirect = setTimeout(() => {
        this.router.navigate(['invitation'], { queryParams: this.paramsForRedirect });
        clearTimeout(timerForRedirect);
      }, 600);
      clearTimeout(timerForStyles);
    }, 700);
  }
}
