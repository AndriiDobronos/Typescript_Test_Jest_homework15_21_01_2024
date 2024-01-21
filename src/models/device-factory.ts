import { IHeadphones } from "./headphones";
import { ISmartphone } from "./smartphone";

export interface IDeviceFactory {
  createSmartphone(): ISmartphone;
  createHeadphones(): IHeadphones;
}
