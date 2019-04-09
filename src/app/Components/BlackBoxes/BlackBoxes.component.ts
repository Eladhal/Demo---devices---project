import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDeviceGroup } from 'src/app/Models/IDeviceGroup';
import { DevGroupHttpService } from 'src/app/Services/dev-group-http.service';
import { Subscription } from 'rxjs';
import { CurrentlearningStateService } from 'src/app/Services/currentlearning-state.service';

@Component({
  selector: 'app-black-boxes',
  templateUrl: './BlackBoxes.component.html',
  styleUrls: ['./BlackBoxes.component.css']
})
export class BlackBoxes implements OnInit,OnDestroy {

  deviceGropus: IDeviceGroup[];
  subscription: Subscription;
  isLoaded = false;

  constructor(private devGrpHttpService: DevGroupHttpService,
              private currentlearningStateService: CurrentlearningStateService) { }

  ngOnInit() {
    this.devGrpHttpService.fetchAllDeviceGroups();
    this.subscription= this.currentlearningStateService.getDevGroupData()
                           .subscribe((deviceGroupData)=>{ 
                              this.deviceGropus = deviceGroupData;
                              this.isLoaded = true;
                           });
  }

  chkStateChanged(devGroup: IDeviceGroup){
    const newDeviceGroup =  this.deviceGropus.map( dGroup => {
      if (dGroup.Id === devGroup.Id){
        return devGroup;
      }
      return dGroup;
    });
    this.currentlearningStateService.updateDevGroupData(newDeviceGroup);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
 }

}
