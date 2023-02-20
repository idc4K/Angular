import { Injectable } from "@angular/core"
import {Data} from "../module/snap.mode"

@Injectable({
    providedIn : "root"
})
export class SnapService {
   data : Data[] = [
    {
      id : 1,
      title : "Ours App",
      desc : "I want to be perfect in angular",
      createdDate : new Date(),
      snaps: 0,
      cdt:false
      
    },
    {
      id : 2,
      title : "Ours App second",
      desc : "I want to be perfect in angular",
      createdDate : new Date(),
      snaps: 0,
      cdt:false
      
    }
  ]

  getAll(): Data[]{
    return this.data
  }
  snapById(dataId : number): void{
    const obj = this.data.find(obj => obj.id === dataId)
    if(obj){
        obj.snaps++
    }
    else{
        throw new Error("Snap not find")
    }
  }
  getSnapById(snapId : number) : Data{
    const obj = this.data.find(obj => obj.id === snapId)
    if(!obj){
        throw new Error("Snap not find")
    }
    else{
        return obj
    }
  }
}