import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//Gridはcoreから呼び出す
import { Grid, Avatar } from "@material-ui/core";
import { gravatarPath } from '../gravatar';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px"
  },
});

const MessageListInputField = ({ name }) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid xs={1}>
          <Avatar src={avatarPath}/>
        </Grid>
        <Grid xs={10}>
          入力
        </Grid>
        <Grid xs={1}>
          ボタン
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageListInputField;
