import React,{useRef,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
} from "@material-ui/core";

import {gravatarPath} from '../gravatar'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));


const MessageItem = ({ name, key, text, isLastItem }) => {
  const classes = useStyles
  const avatarPath = gravatarPath(name)
  const ref = useRef(null)

  //第2引数には、監視対象のstateを配列形式で記述。
  //useEffectは条件付きで実行してはならない。条件式は必ず中で書かないとエラーになる。
  useEffect(() => {
    console.log(isLastItem)
    if (isLastItem) {
    ref.current.scrollIntoView({behavior: "smooth"})}
  },[isLastItem]);



  return (
    <ListItem alignItems="flex-start" divider={true} ref={ref}>
    <ListItemAvatar>
      <Avatar src={avatarPath} />
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
      }
    />
  </ListItem>
  )
};

export default MessageItem;
