import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrentlearningStateService } from 'src/app/Services/currentlearning-state.service';
import { Subscription } from 'rxjs';
import { ILearningData } from 'src/app/Models/ILearningData';
import { IDeviceGroup } from 'src/app/Models/IDeviceGroup';
import { IGroupOption } from 'src/app/Models/IGroupOption';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.css']
})
export class SummeryComponent implements OnInit,OnDestroy {
  subscriptionDevGrp: Subscription;
  subscriptionprotocols: Subscription;
  subscriptionTimePeriod: Subscription;
  summerizeData: ILearningData;

  constructor(private currentlearningStateService: CurrentlearningStateService,
              private router:Router) {
    this.summerizeData = {
      deviceGroups:[],
      protocols:[],
      timePeriod:[]
    }
   }

  ngOnInit() {
    this.subscriptionDevGrp= this.currentlearningStateService.getDevGroupData()
    .subscribe((devGroupData)=>{
      this.summerizeData ={...this.summerizeData,
        deviceGroups:devGroupData.map(devGroup => {
          return {...devGroup,
                  devices: devGroup.devices.filter(dev => {
                    if (dev.active === 1){
                      return dev;
                    }
                  })
                };
        })
      };
    });
    this.subscriptionprotocols= this.currentlearningStateService.getProtocolData()
      .subscribe((prtocolsData)=>{
        this.summerizeData ={...this.summerizeData,
          protocols: prtocolsData.filter( prot => {
            if (prot.active === 1){
              return prot;
            }
          })
        };
      });
    this.subscriptionTimePeriod= this.currentlearningStateService.getTimePeriodData()
        .subscribe((timePeriodData)=>{
          this.summerizeData ={...this.summerizeData,            
            timePeriod: timePeriodData.filter(time => {
              if (time.active === 1){
                return time;
              }
            })
            };
      });

}
  ngOnDestroy(): void {
    this.subscriptionDevGrp.unsubscribe();
    this.subscriptionprotocols.unsubscribe();
    this.subscriptionTimePeriod.unsubscribe();
  }

  btnClearClicked(){      
    this.currentlearningStateService.clearLearningData();
  }

  btnStartLearningClicked(){
    const devices = this.summerizeData.deviceGroups.reduce((finalIds, devG) => {
      return [
        ...finalIds,
        ...devG.devices.map(dev => dev.id)
      ];
    }, []).join(',');

    const protocols = this.summerizeData.protocols.map(prot=>{
      if (prot.active === 1){
        return prot.id;
      }
    }).join(',');
   
    const queryParams = {
      devices: devices,
      protocols: protocols || undefined,  
      times:this.summerizeData.timePeriod.map(time=>{
        if (time.active === 1){
          return time.id;
        }
      })
    };

    this.router.navigate(['/'],{queryParams: queryParams});
  }

}
