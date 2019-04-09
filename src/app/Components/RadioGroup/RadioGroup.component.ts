import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IGroupOption } from 'src/app/Models/IGroupOption';
import { Subscription } from 'rxjs';
import { CurrentlearningStateService } from 'src/app/Services/currentlearning-state.service';

@Component({
  selector: 'app-select-time-period',
  templateUrl: './RadioGroup.component.html',
  styleUrls: ['./RadioGroup.component.css']
})
export class RadioGroup implements OnInit,OnDestroy {
  timePeriod: IGroupOption[];
  subscription: Subscription;
  @Input() groupName: string;
  constructor(private currentlearningStateService: CurrentlearningStateService) { }

  ngOnInit() {
    this.subscription= this.currentlearningStateService.getTimePeriodData()
    .subscribe((timeperiod)=>{
       this.timePeriod = timeperiod;
    });
  }

  childChkStateChanged(radioBtn){
    const newTimePeriod = this.timePeriod.map(time => {
      if (time.id === radioBtn.id){
        return radioBtn
      }
      else{
        time.active=0;
        return time;
      }
    })
    this.currentlearningStateService.updateTimePeriodData(newTimePeriod);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
