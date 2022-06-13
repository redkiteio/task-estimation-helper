import { memo } from "react";
import {
  Box,
  Grid,
  TextareaAutosize,
  Typography,
  useMediaQuery,
} from "@mui/material";
import useMain from "./Main.hook";
import NewHelper from "../NewHelper/NewHelper";
import TaskHelpers from "../TaskHelpers/TaskHelpers";
import TimeField from "../TimeField/TimeField";
import { Field, MuiButton, TotalField } from "./Main.styles";
import Subtask from "../Subtask/Subtask";
import { useMainStyles } from "../../styles";

const Main = () => {
  const {
    values,
    handleBlur,
    submitForm,
    handleChange,
    setFieldValue,
    remove,
    pushHelper,
    pushSubtask,
  } = useMain();
  const { grid, textarea, mainGrid, footerGrid } = useMainStyles();
  const matches = useMediaQuery("(min-width:1240px)");
  const { description, subtasks, taskTime, helpers, totalTime, name } = values;

  return (
    <Box
      padding={3}
      width={matches ? "60vw" : "95vw"}
      margin={"0 auto"}
      paddingBottom={0}
    >
      <Typography variant="h4" align={"center"}>
        Task Estimation Helper
      </Typography>
      <Typography variant={"body2"} textAlign={"center"} paddingBottom={3}>
        This tool aims to help you estimate your tasks more accurately.
        <br />
        Simply add your tasks and subtasks (if needed), add hours/minutes, and
        then use helper questions to make estimations more accurate.
      </Typography>
      <Grid
        container
        direction={"column"}
        paddingBottom={0}
        className={mainGrid}
      >
        <Grid container flexWrap={"wrap"} className={grid}>
          <Grid
            item
            xs={matches ? 6 : 12}
            container
            alignItems={"center"}
            flexWrap={"nowrap"}
            paddingRight={0}
            paddingLeft={0}
          >
            <img src="assets/images/file.svg" alt="file" />
            <Field
              sx={{ width: `calc(100% - 50px)` }}
              name={`name`}
              id={`name`}
              placeholder={"Task"}
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
              readonly={!!subtasks.length}
              submitForm={submitForm}
              handleBlur={handleBlur}
              values={taskTime}
              name={"taskTime"}
              setFieldValue={setFieldValue}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              value={description}
              name={"description"}
              id={"description"}
              onChange={handleChange}
              onBlur={handleBlur}
              className={textarea}
              placeholder={"Description..."}
              maxRows={4}
            />
          </Grid>
          <Grid
            item
            xs={12}
            justifyContent={"flex-end"}
            container
            paddingRight={0}
            paddingLeft={0}
          >
            <MuiButton variant="contained" onClick={pushSubtask}>
              Create subtask
            </MuiButton>
          </Grid>
        </Grid>
        {subtasks.map((subtask, index) => (
          <Subtask
            key={`subtask_${index}`}
            subtask={subtask}
            remove={remove}
            index={index}
            handleBlur={handleBlur}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            submitForm={submitForm}
          />
        ))}
        <Grid container item xs={12} direction={"column"} paddingTop={"20px"}>
          <Grid
            item
            xs={12}
            container
            justifyContent={"space-between"}
            direction={"row"}
            alignItems={"center"}
            paddingLeft={0}
          >
            <Typography
              variant="h6"
              width={"fit-content"}
              whiteSpace={"nowrap"}
              paddingRight={2}
            >
              Helpers
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {helpers.map((helper, index) => (
              <TaskHelpers
                key={`helper_${index}`}
                submitForm={submitForm}
                helper={helper}
                index={index}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
              />
            ))}
          </Grid>
          <NewHelper push={pushHelper} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"flex-end"}
        className={footerGrid}
      >
        <Typography
          variant="body1"
          whiteSpace={"nowrap"}
          paddingRight={1}
          align={"center"}
          noWrap={true}
        >
          <img src={"assets/images/clock.svg"} alt="clock" />
          Total time:
        </Typography>
        <TotalField placeholder={"0 h 0 min"} value={totalTime} disabled />
      </Grid>
    </Box>
  );
};

export default memo(Main);
