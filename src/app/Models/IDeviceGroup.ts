import {IGroupOption} from './IGroupOption';

export interface IDeviceGroup {
    Id: number;
    name:string;
    devices: IGroupOption[];
}