import { Component, OnInit } from '@angular/core';
import { Data } from '../module/snap.mode';
import { SnapService } from '../services/snap.service';

@Component({
  selector: 'app-snap-list',
  templateUrl: './snap-list.component.html',
  styleUrls: ['./snap-list.component.scss']
})
export class SnapListComponent implements OnInit{

  data ! : Data[]
  
  constructor(private snapService: SnapService){}

  ngOnInit() : void{
      this.data = this.snapService.getAll()
  }
}
