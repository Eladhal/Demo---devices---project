import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDeviceGroup } from 'src/app/Models/IDeviceGroup';
import { IGroupOption } from 'src/app/Models/IGroupOption';

@Component({
  selector: 'app-collapsable-checkboxes-group',
  templateUrl: './CollapsableCheckboxesGroup.component.html',
  styleUrls: ['./CollapsableCheckboxesGroup.component.css']
})
export class CollapsableCheckboxesGroup implements OnInit {
  titleChecked: boolean;
  @Input() devGroup: IDeviceGroup; 
  @Output() chkBoxStateChanged: EventEmitter<IDeviceGroup> = new EventEmitter();

  collapseState: boolean = true;

  constructor() { }

  ngOnInit() {
    this.titleChecked = this.devGroup.devices.every(dev => dev.active === 1);
  }

  btnCollapseClicked(){
    this.collapseState = !this.collapseState;
  }

  titleChkBoxclicked(isChecked:boolean){
    const newDevGroup = {
      ...this.devGroup,
      devices: this.devGroup.devices.map( dev => {
        return {
          ...dev,
          active: isChecked ? 1 : 0
        };    
      })
    };
    this.chkBoxStateChanged.emit(newDevGroup);
  }

  childChkStateChanged(groupOption:IGroupOption){
    const updatedGroupsOptions = {
      ...this.devGroup,
      devices: this.devGroup.devices.map(go => {
        if (go.id === groupOption.id) {
          return groupOption;
        }
        return go;
      })
    };
    this.chkBoxStateChanged.emit(updatedGroupsOptions);
  }
}
