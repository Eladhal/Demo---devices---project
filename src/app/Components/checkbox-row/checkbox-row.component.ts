import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGroupOption } from 'src/app/Models/IGroupOption';

@Component({
  selector: 'app-checkbox-row',
  templateUrl: './checkbox-row.component.html',
  styleUrls: ['./checkbox-row.component.css']
})
export class CheckboxRowComponent implements OnInit {

  @Input() item: IGroupOption;
  @Output() chkBoxStateChanged: EventEmitter<IGroupOption> = new EventEmitter();
  private _itemChecked:boolean;

  get itemChecked():boolean {
      return this._itemChecked;
  }
  set itemChecked(chkState:boolean) {
      this._itemChecked = chkState;

      //this.item.active = chkState? 1: 0;
  }
  constructor() { 
    //    this._devChecked = this.device.active == 1; here it was still null , why??
  }
  ngOnInit() {
    this.itemChecked = this.item.active == 1;
  }

  chkBoxclicked(val) {
    const updatedItem = {
      ...this.item,
      active: val ? 1 : 0
    };
    console.log('ProtocolsComponent', updatedItem);

    this.chkBoxStateChanged.emit(updatedItem);
  }
}
