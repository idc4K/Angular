import { Component, OnInit} from '@angular/core';
import { filter, interval,Observable } from 'rxjs';
import { Data } from './module/snap.mode';
import {map, tap} from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // interval$ !: Observable<number>

  ngOnInit() {

    // this.interval$ = interval(1000).pipe(
    //   // filter(value => value % 3 === 0),
    //   // map(value => value % 2 == 0 ? `${value} nombre pair` : `${value} nombre impair`),
    //   // tap(text => this.Logger(text))
    // )
  } 

  // Logger(text : string){
  //   console.log(`Log : ${text}`)
  // }
  onClick(){

  }
}
