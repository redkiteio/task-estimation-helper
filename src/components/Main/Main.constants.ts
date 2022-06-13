import { HelperItem, PeriodItem, Type } from "./Main.types";

export const period: PeriodItem = {
  time: {
    time: 0,
    minute: 0,
  },
  percent: 0,
};

export const helpers: HelperItem[] = [
  {
    name: "Will you need to do a research for this task?",
    ...period,
    type: Type.Base,
  },
  {
    name: "Will you need setups for this task?",
    ...period,
    type: Type.Base,
  },
  {
    name: "Will you need to communicate?",
    ...period,
    type: Type.Base,
  },
  {
    name: "Will you need to integrate something that’s not depending on you?",
    ...period,
    type: Type.Base,
  },
  {
    name: "Will you need a cleanup/refactor?",
    ...period,
    type: Type.General,
  },
  {
    name: "Will you need breaks?",
    ...period,
    type: Type.Base,
  },
];
