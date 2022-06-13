import React, { memo } from "react";
import { TimeValue } from "./TimeField.types";
import { Grid } from "@mui/material";
import { FormikErrors } from "formik/dist/types";
import { MainTypes } from "../Main/Main.types";
import { Field } from "../Main/Main.styles";
import { useMainStyles } from "../../styles";

interface TimeFieldProps {
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<MainTypes>> | Promise<void>;
  values: TimeValue;
  name: string;
  submitForm?: () => Promise<any>;
  readonly?: boolean;
  helper?: boolean;
  field?: string;
}

const TimeField: React.FC<TimeFieldProps> = ({
  handleBlur,
  values,
  name,
  setFieldValue,
  submitForm,
  readonly,
  helper,
  field,
}) => {
  const { time, minute } = values;
  const { timeField } = useMainStyles();

  return (
    <Grid
      container
      direction={"row"}
      flexWrap={"nowrap"}
      alignItems={"center"}
      item
      xs={"auto"}
      paddingLeft={0}
      paddingRight={0}
    >
      <Field
        id={`${name}.time`}
        name={`${name}.time`}
        placeholder={"0"}
        onBlur={handleBlur}
        onKeyDown={(e) => {
          const { keyCode } = e;
          if (keyCode === 110 || keyCode === 190) e.preventDefault();
        }}
        onChange={(e) => {
          const { min, value } = e.target as HTMLInputElement;
          setFieldValue(`${name}.time`, value < min ? "" : value);
          helper && setFieldValue(`${field}`, "");
          submitForm && submitForm();
        }}
        disabled={readonly || false}
        value={time || ""}
        className={timeField}
        type={"number"}
        InputProps={{
          inputProps: {
            min: 0,
            step: 1,
          },
        }}
        sx={{ marginLeft: 0 }}
        helperText={"h"}
      />
      <Field
        id={`${name}.minute`}
        name={`${name}.minute`}
        onBlur={handleBlur}
        placeholder={"0"}
        disabled={readonly || false}
        onKeyDown={(e) => {
          const { keyCode } = e;
          if (keyCode === 110 || keyCode === 190) e.preventDefault();
        }}
        onChange={(e) => {
          let { max, min, value } = e.target as HTMLInputElement;
          value = value.replaceAll(".", "");
          if (value > max) setFieldValue(`${name}.minute`, max);
          else if (value < min) setFieldValue(`${name}.minute`, "");
          else setFieldValue(`${name}.minute`, value);
          helper && setFieldValue(`${field}`, "");
          submitForm && submitForm();
        }}
        value={minute || ""}
        className={timeField}
        type={"number"}
        helperText={"min"}
        InputProps={{
          inputProps: {
            max: 60,
            min: 0,
            step: 1,
          },
        }}
      />
    </Grid>
  );
};

export default memo(TimeField);
