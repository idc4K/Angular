import { Component, OnInit,Input } from '@angular/core';
import { SnapService } from '../services/snap.service';
import { Data } from '../module/snap.mode';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-snap',
  templateUrl: './single-snap.component.html',
  styleUrls: ['./single-snap.component.scss']
})
export class SingleSnapComponent implements OnInit{

 data ! : Data

  constructor(private snapData : SnapService, private router: ActivatedRoute){}
  ngOnInit(){
    const dataId = +this.router.snapshot.params['id']
    this.data = this.snapData.getSnapById(dataId)
  }

  onSubmit(){
    if(this.data.cdt === false){
      this.snapData.snapById(this.data.id)
      this.data.cdt = true
    }
    else{
      this.data.snaps--
      this.data.cdt = false
    }
    
  }


}
