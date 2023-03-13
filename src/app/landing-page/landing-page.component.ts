import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  userEmail ! : string
  ngOnInit(): void {
      
  }

  onSubmit(){
    console.log(this.userEmail)
  }
 
}
