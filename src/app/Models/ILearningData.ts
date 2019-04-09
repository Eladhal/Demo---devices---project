import { IDeviceGroup } from "./IDeviceGroup";
import { IGroupOption } from "./IGroupOption";

export interface ILearningData{
    deviceGroups: IDeviceGroup[];
    protocols: IGroupOption[];
    timePeriod: IGroupOption[];
}