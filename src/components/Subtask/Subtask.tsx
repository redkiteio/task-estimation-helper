import {
  Grid,
  TextareaAutosize,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ArrowUpward, Close } from "@mui/icons-material";
import { Field } from "../Main/Main.styles";
import TimeField from "../TimeField/TimeField";
import React, { useMemo, memo } from "react";
import { MainTypes, SubtaskTypes } from "../Main/Main.types";
import { FormikErrors } from "formik/dist/types";
import useSubtask from "./Subtask.hook";
import { useMainStyles } from "../../styles";

interface SubtaskProps {
  subtask: SubtaskTypes;
  remove: (index: number) => void;
  index: number;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<MainTypes>> | Promise<void>;
  submitForm: () => Promise<any>;
}

const Subtask: React.FC<SubtaskProps> = ({
  subtask,
  remove,
  index,
  handleChange,
  handleBlur,
  setFieldValue,
  submitForm,
}) => {
  const { name, time, description } = useMemo(() => subtask, [subtask]);
  const { grid, textarea, invisibleButton } = useMainStyles();
  const { collapsed, setCollapsed } = useSubtask();
  const matches = useMediaQuery("(min-width:1240px)");

  return (
    <Grid
      key={`subtask_${index}`}
      container
      flexWrap={"wrap"}
      className={grid}
      sx={{ marginTop: "20px" }}
      position={"relative"}
      paddingTop={matches ? 3 : 2}
    >
      <Grid
        item
        xs={matches ? 6 : 12}
        container
        alignItems={"center"}
        flexWrap={"nowrap"}
        paddingRight={0}
        paddingLeft={0}
      >
        <button
          className={invisibleButton}
          style={{
            position: "absolute",
            right: "8px",
            top: "12px",
            height: "20px",
            width: "20px",
          }}
          onClick={() => remove(index)}
        >
          <Close sx={{ height: "100%", width: "100%" }} />
        </button>
        <img src="assets/images/documents.svg" alt="file" />
        <Field
          sx={{ width: `calc(100% - 50px)` }}
          name={`subtasks[${index}].name`}
          id={`subtasks[${index}].name`}
          placeholder={"Subtask"}
          onBlur={handleBlur}
          onChange={handleChange}
          value={name}
        />
      </Grid>
      <Grid
        item
        container
        xs={matches ? 6 : 12}
        flexWrap={"nowrap"}
        alignItems={"center"}
        justifyContent={matches ? "flex-end" : "flex-start"}
        paddingRight={0}
        paddingLeft={0}
      >
        <Typography
          variant="body1"
          whiteSpace={"nowrap"}
          paddingRight={1}
          align={"center"}
          noWrap={true}
        >
          <img src={"assets/images/clock.svg"} alt="clock" />
          Task time:
        </Typography>
        <TimeField
          submitForm={submitForm}
          handleBlur={handleBlur}
          values={time}
          name={`subtasks[${index}].time`}
          setFieldValue={setFieldValue}
        />
      </Grid>
      <Grid
        item
        xs={12}
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"nowrap"}
        paddingRight={0}
        paddingLeft={0}
      >
        <Typography variant={"body2"} width={"fit-content"}>
          Description
        </Typography>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={invisibleButton}
          style={{ height: "20px", width: "20px", marginRight: "-4px" }}
        >
          <ArrowUpward
            sx={{
              transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
              height: "100%",
              width: "100%",
            }}
          />
        </button>
      </Grid>
      {collapsed && (
        <Grid item xs={12}>
          <TextareaAutosize
            value={description}
            maxRows={4}
            onChange={handleChange}
            id={`subtasks[${index}].description`}
            name={`subtasks[${index}].description`}
            onBlur={handleBlur}
            className={textarea}
            placeholder={"Description..."}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default memo(Subtask);
