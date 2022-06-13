import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { useMemo, memo } from "react";
import useNewHelper from "./NewHelper.hook";
import { Add } from "@mui/icons-material";
import TimeField from "../TimeField/TimeField";
import { HelperItem } from "../Main/Main.types";
import { Field } from "../Main/Main.styles";
import { useMainStyles } from "../../styles";

interface NewHelperProps {
  push: (data: HelperItem) => void;
}

const NewHelper: React.FC<NewHelperProps> = ({ push }) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    setFieldValue,
    touched,
  } = useNewHelper({
    push,
  });
  const { name, time, percent } = useMemo(() => values, [values]);
  const { errorText } = useMainStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        item
        xs={12}
        container
        paddingTop={2}
        paddingLeft={0}
        paddingRight={0}
      >
        <Grid item xs={12}>
          <Typography
            variant="body2"
            whiteSpace={"nowrap"}
            paddingRight={2}
            width={"fit-content"}
          >
            <Button
              variant="text"
              type={"submit"}
              style={{ padding: 0, marginBottom: "12px" }}
            >
              <Add sx={{ width: "0.7em" }} />
              Add your own helper input
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} paddingLeft={0}>
          <Field
            sx={{
              width: "100%",
              marginLeft: 0,
            }}
            fullWidth
            id={`name`}
            name={`name`}
            onChange={handleChange}
            value={name}
            helperText={touched.name && errors.name}
            FormHelperTextProps={{
              className: errorText,
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
        >
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <TimeField
              handleBlur={handleBlur}
              values={time}
              name={"time"}
              setFieldValue={setFieldValue}
              helper={true}
              field={"percent"}
            />
            <Typography variant={"body2"}>or</Typography>
            <Field
              id={`percent`}
              placeholder={"0"}
              name={`percent`}
              onKeyDown={(e) => {
                const { keyCode } = e;
                if (keyCode === 110 || keyCode === 190) e.preventDefault();
              }}
              onBlur={handleBlur}
              onChange={(e) => {
                handleChange(e);
                setFieldValue("time.time", "");
                setFieldValue("time.minute", "");
              }}
              value={percent || ""}
              type={"number"}
              helperText={"%"}
            />
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default memo(NewHelper);
