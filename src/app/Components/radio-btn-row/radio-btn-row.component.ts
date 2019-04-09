import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGroupOption } from 'src/app/Models/IGroupOption';

@Component({
  selector: 'app-radio-btn-row',
  templateUrl: './radio-btn-row.component.html',
  styleUrls: ['./radio-btn-row.component.css']
})
export class RadioBtnRowComponent implements OnInit {

  @Input() item: IGroupOption;
  @Input() groupName:string;
  @Output() chkBoxStateChanged: EventEmitter<IGroupOption> = new EventEmitter();
  private _itemChecked:boolean;

  get itemChecked():boolean {
      return this._itemChecked;
  }

  set itemChecked(chkState:boolean) {
      this._itemChecked = chkState;
  }
  constructor() { 
  }

  ngOnInit() {
    this.itemChecked = this.item.active == 1;
  }

  chkBoxclicked(chkState){
    this.chkBoxStateChanged.emit({
      ...this.item,
      active: chkState? 1:0
    });
  }

}
