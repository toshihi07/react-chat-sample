import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//Gridはcoreから呼び出す
import { Grid, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px"
  },
});

const MessageListInputField = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid xs={1}>
          <Avatar />
        </Grid>
        <Grid xs={10}>
          <input type='text' name='txt' placeholder='入力欄' require />
        </Grid>
        <Grid xs={1}>
          ボタン
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageListInputField;
