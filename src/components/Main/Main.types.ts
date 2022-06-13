import { TimeValue } from "../TimeField/TimeField.types";

export interface MainTypes {
  name: string;
  taskTime: TimeValue;
  totalTime: string;
  description: string;
  subtasks: SubtaskTypes[];
  helpers: HelperItem[];
}

export interface SubtaskTypes {
  name: string;
  time: TimeValue;
  description: string;
}

export interface PeriodItem {
  time: TimeValue;
  percent: number;
}

export interface HelperType {
  name: string;
  type: Type;
}

export type HelperItem = HelperType & PeriodItem;

export enum Type {
  Base,
  General,
}
