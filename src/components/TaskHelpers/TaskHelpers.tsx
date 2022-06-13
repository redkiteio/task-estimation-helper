import { Paper, Stack, Typography } from "@mui/material";
import { HelperItem, MainTypes } from "../Main/Main.types";
import React, { memo, useMemo } from "react";
import { FormikErrors } from "formik/dist/types";
import TimeField from "../TimeField/TimeField";
import { Field } from "../Main/Main.styles";

interface TaskHelpersProps {
  helper: HelperItem;
  index: number;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any>) => void;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<FormikErrors<MainTypes>> | Promise<void>;
  submitForm: () => Promise<any>;
}

const TaskHelpers: React.FC<TaskHelpersProps> = ({
  helper,
  index,
  handleBlur,
  handleChange,
  setFieldValue,
  submitForm,
}) => {
  const { name, time, percent } = useMemo(() => helper, [helper]);

  return (
    <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
      <Typography variant={"body2"}>{name}</Typography>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <TimeField
          handleBlur={handleBlur}
          values={time}
          name={`helpers[${index}].time`}
          submitForm={submitForm}
          setFieldValue={setFieldValue}
          helper={true}
          field={`helpers[${index}].percent`}
        />
        <Typography variant={"body2"}>or</Typography>
        <Field
          id={`helpers[${index}].percent`}
          name={`helpers[${index}].percent`}
          placeholder={"0"}
          onBlur={handleBlur}
          onChange={(e) => {
            const { min, value, name } = e.target as HTMLInputElement;
            setFieldValue(`helpers[${index}].time.time`, "");
            setFieldValue(`helpers[${index}].time.minute`, "");
            value < min
              ? setFieldValue(name, value.substring(1))
              : handleChange(e);
            submitForm();
          }}
          onKeyDown={(e) => {
            const { keyCode } = e;
            if (keyCode === 110 || keyCode === 190) e.preventDefault();
          }}
          InputProps={{
            inputProps: {
              min: 0,
            },
          }}
          value={percent || ""}
          type={"number"}
          helperText={"%"}
        />
      </Stack>
    </Paper>
  );
};

export default memo(TaskHelpers);
