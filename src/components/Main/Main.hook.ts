import { useFormik } from "formik";
import { HelperItem, MainTypes, SubtaskTypes } from "./Main.types";
import { helpers } from "./Main.constants";

const useMain = () => {
  const initialValues: MainTypes = {
    description: "",
    helpers,
    name: "",
    subtasks: [],
    taskTime: {
      time: 0,
      minute: 0,
    },
    totalTime: "0 h 0 min",
  };

  const {
    values,
    handleChange,
    handleBlur,
    setValues,
    setFieldValue,
    submitForm,
  } = useFormik<MainTypes>({
    initialValues,
    onSubmit: (values) => setTotalEstimation(values),
  });

  const remove = (index: number) => {
    const { subtasks } = values;
    const newSubtasks = subtasks.map((subtask) => ({ ...subtask }));
    newSubtasks.splice(index, 1);
    setValues({ ...values, subtasks: newSubtasks });
    submitForm();
  };

  const pushSubtask = () => {
    const { subtasks } = values;
    subtasks.push({
      name: "",
      description: "",
      time: {
        time: 0,
        minute: 0,
      },
    });
    setValues({
      ...values,
      taskTime: {
        time: 0,
        minute: 0,
      },
      subtasks,
    });
    submitForm();
  };

  const pushHelper = (data: HelperItem) => {
    const { helpers } = values;
    helpers.push({
      ...data,
    });
    setValues({ ...values, helpers });
    submitForm();
  };

  const setTotalEstimation = (values: MainTypes) => {
    const { subtasks, helpers } = values;
    const helperSum = countEstimation(helpers);
    const subtaskSum = countEstimation(subtasks);

    let data = {
      percent: helperSum.percent,
      minute: helperSum.minute + subtaskSum.minute,
    };

    let minutesOverall =
      data.minute + +values.taskTime.minute + values.taskTime.time * 60;

    minutesOverall = minutesOverall + (minutesOverall * data.percent) / 100;

    const finalData = convertMinutes(minutesOverall);

    const { minutes, time } = finalData;

    setValues({
      ...values,
      totalTime: `${time} h  ${minutes} min`,
    });
  };

  const convertMinutes = (minutes: number) => ({
    minutes: minutes >= 60 ? Math.trunc(minutes % 60) : minutes,
    time: minutes >= 60 ? Math.trunc(minutes / 60) : 0,
  });

  const isHelper = (item: HelperItem | SubtaskTypes) =>
    (item as HelperItem).percent !== undefined;

  const countEstimation = (
    data: Array<HelperItem | SubtaskTypes>
  ): { time: number; minute: number; percent: number } =>
    data.reduce(
      (prev, current) => ({
        ...prev,
        minute:
          prev.minute +
          +current.time.minute +
          prev.time * 60 +
          +current.time.time * 60,
        percent: isHelper(current)
          ? prev.percent + +(current as HelperItem).percent
          : prev.percent,
      }),
      { time: 0, minute: 0, percent: 0 }
    );

  return {
    values,
    handleBlur,
    submitForm,
    handleChange,
    setFieldValue,
    remove,
    pushSubtask,
    pushHelper,
  };
};

export default useMain;
