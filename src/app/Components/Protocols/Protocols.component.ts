import { Component, OnInit, OnDestroy } from '@angular/core';
import { IGroupOption } from 'src/app/Models/IGroupOption';
import { Subscription } from 'rxjs';
import { CurrentlearningStateService } from 'src/app/Services/currentlearning-state.service';

@Component({
  selector: 'app-select-protocols',
  templateUrl: './Protocols.component.html',
  styleUrls: ['./Protocols.component.css']
})
export class Protocols implements OnInit,OnDestroy {
   protocols: IGroupOption[];
   subscription: Subscription;

  constructor(private currentlearningStateService: CurrentlearningStateService) { 
  }

  ngOnInit() {
    this.subscription = this.currentlearningStateService.getProtocolData().subscribe(protocols => {
      this.protocols = protocols;
    });
  }

  childChkStateChanged(protocol){
    const updatedProtocols = this.protocols.map(p => {
      if (p.id === protocol.id) {
        return protocol;
      }

      return p;
    });

    console.log('ProtocolsComponent', this.protocols, updatedProtocols);

    this.currentlearningStateService.updateProtocolsData(updatedProtocols);
  }

  ngOnDestroy(): void {
  }

}
