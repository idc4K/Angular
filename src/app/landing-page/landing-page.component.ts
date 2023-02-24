import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
      
  }
  onClick(){
    const interva$ = interval(1000)

    setTimeout(() => interva$.subscribe((value) => console.log(value)), 3000)
  }
}
