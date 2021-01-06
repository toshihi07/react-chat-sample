import React,{ useState,useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
//Gridはcoreから呼び出す
import { Grid, Avatar } from "@material-ui/core";
import { gravatarPath } from '../gravatar';
import MessageField from './MessageField'
import MessageSubmitButton from './MessageSubmitButton'

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
  const inputEl= useRef(null)

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1} >
          <Avatar src={avatarPath}/>
        </Grid>
        <Grid item xs={10} click >
          <MessageField name={name} setText={setText} text={text} inputEl={inputEl}/>
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton name={name} text={text} setText={setText} inputEl={inputEl}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageListInputField;

