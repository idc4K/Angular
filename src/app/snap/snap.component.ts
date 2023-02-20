import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../module/snap.mode';
import { SnapService } from '../services/snap.service';

@Component({
  selector: 'app-snap',
  templateUrl: './snap.component.html',
  styleUrls: ['./snap.component.scss']
})
export class SnapComponent implements OnInit{
  @Input() data ! : Data

  constructor(private snapData : SnapService, private route : Router){}
  ngOnInit(){
    
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
  viewData(){
    return this.route.navigateByUrl(`Accueil/${this.data.id}`);
  }

}
