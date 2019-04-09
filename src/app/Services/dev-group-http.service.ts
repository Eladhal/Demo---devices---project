import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDeviceGroup } from '../Models/IDeviceGroup';
import {CurrentlearningStateService} from './currentlearning-state.service';

@Injectable({
  providedIn: 'root'
})
export class DevGroupHttpService {

  constructor(private http: HttpClient , private curLearningService: CurrentlearningStateService) {   
  }

  fetchAllDeviceGroups (){
    this.http.get<IDeviceGroup[]> ('http://localhost:3000/device-groups')
    .subscribe(data => this.curLearningService.updateDevGroupData(data));
  }
}
