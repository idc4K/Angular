import { Component, OnInit} from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Data } from './module/snap.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$ ! : Observable<number>
  ngOnInit(){
   this.interval$ = interval(1000)
  } 
  onClick(){

  }
}
