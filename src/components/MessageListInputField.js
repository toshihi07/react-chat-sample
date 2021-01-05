import React,{ useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//Gridはcoreから呼び出す
import { Grid, Avatar } from "@material-ui/core";
import { gravatarPath } from '../gravatar';
import MessageField from './MessageField'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px"
  },
});

const MessageListInputField = ({ name }) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  //textをfirebaseに保存する。
  //textを管理するのはmessageInputField。なぜなら、ボタンを押した時にfirebaseに保存するから。
  const [text,setText] = useState("");
  console.log(text)

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1} >
          <Avatar src={avatarPath}/>
        </Grid>
        <Grid item xs={10}>
          <MessageField name={name} setText={setText} text={text}/>
        </Grid>
        <Grid item xs={1}>
          ボタン
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageListInputField;
