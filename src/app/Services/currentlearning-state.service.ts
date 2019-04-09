import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IDeviceGroup } from '../Models/IDeviceGroup';
import { ILearningData } from '../Models/ILearningData';
import { Subject } from 'rxjs';
import { IGroupOption } from '../Models/IGroupOption';


@Injectable({
  providedIn: 'root'
})
export class CurrentlearningStateService {

  private baseProtocolsData = [
    {id:1,name:"Modbus",active:0},
    {id:2,name:"DNP 3",active:0},
    {id:3,name:"IEC104",active:0},
    {id:4,name:"MMS",active:0},
  ];

  private baseTimePeriodData = [
    {id:1,name:"Last 20 minutes",active:1},
    {id:2,name:"Last hour",active:0},
    {id:3,name:"Last 8 hours",active:0},
    {id:4,name:"Last 24 Hours",active:0},
  ];

  private learningData: ILearningData;

  private deviceGroupsSubject : Subject<IDeviceGroup[]>;
  private protocolsSubject : BehaviorSubject<IGroupOption[]>;
  private timePeriodSubject : BehaviorSubject<IGroupOption[]>;
  
  constructor() {
    this.learningData = {
      deviceGroups: [],
      protocols: this.baseProtocolsData,
      timePeriod: this.baseTimePeriodData,
    };

    this.deviceGroupsSubject = new Subject<IDeviceGroup[]>();
    this.protocolsSubject = new BehaviorSubject<IGroupOption[]>(this.learningData.protocols);
    this.timePeriodSubject = new BehaviorSubject<IGroupOption[]>(this.learningData.timePeriod);
   }

  updateDevGroupData(deviceGroups: IDeviceGroup[]){
    this.learningData.deviceGroups = deviceGroups;
    this.deviceGroupsSubject.next(deviceGroups);
  }

  updateProtocolsData(protocols:IGroupOption[]){
    console.log('CurrentlearningStateService', protocols);
    this.learningData.protocols = protocols;
    this.protocolsSubject.next(protocols);
  }

  updateTimePeriodData(timePeriod:IGroupOption[]){
    this.learningData.timePeriod = timePeriod;
    this.timePeriodSubject.next(timePeriod);
  }

  getTimePeriodData(): Observable<IGroupOption[]> {  
    return this.timePeriodSubject.asObservable();
  }

  getProtocolData(): Observable<IGroupOption[]> {  
    return this.protocolsSubject.asObservable();
  }

  getDevGroupData(): Observable<IDeviceGroup[]> {  
    return this.deviceGroupsSubject.asObservable();
  }

  clearLearningData(){
    const newDevGroup:IDeviceGroup[] = 
    this.learningData.deviceGroups.map((devGroup) =>{
      return {
        ...devGroup,
        devices: devGroup.devices.map(dev =>{
          return {
            ...dev,
            active: 0
          }
        })
      }
    });

    this.updateDevGroupData(newDevGroup);

    this.updateProtocolsData(this.baseProtocolsData);
    this.updateTimePeriodData(this.baseTimePeriodData);
  }

}
