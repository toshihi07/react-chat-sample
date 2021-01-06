import React, { useState, useEffect } from "react";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { messagesRef } from "../firebase";
import MessageItem from "./MessageItem";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow:"auto",
    width: '100%',
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  //useEffect内の関数はレンダリング時の一度しか行われない。第２引数にから配列を渡すことで、一度しか行わないことを明示的に伝えている。
  useEffect(
    () =>
      messagesRef
        .orderByKey()
        .limitToLast(20)
        .on("value", function (snapshot) {
          const messages = snapshot.val();
          console.log(messages);
          if (messages == null) {
            return;
          }
          const entries = Object.entries(messages);
          const newMessages = entries.map((entry) => {
            // エントリー0はキー
            // const key = entry[0]
            // const nameAndText = entry[1];
            const [key, nameAndText] = entry;
            return {
              //{name: "ハムさん", text: "aaaa"}の形で取り出せる
              key,
              ...nameAndText,
            };
          });
          console.log(newMessages);
          setMessages(newMessages);
          console.log("useEffect");
        }),
    []
  );
  //useStyllesを実行してスタイルを取得。
  const classes = useStyles();
  // Attach an asynchronous callback to read the data at our posts reference
  // orderByKeyを用いることで取得する順序を指定できる
  // key:-MQKVnkAFAQT0BEHPjHT: value:{name: "ハムさん", text: "aaaa"}
  // snapshot.val()は配列オブジェクト
  // 他人にもわかりやすいようにコードを書くようにすること
  // コンポーネントがマウントされる際に一度だけ処理を実行するuseEffectを使わないと、無限ループに陥る。

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }) => {
        return <MessageItem key={key} name={name} text={text}>item</MessageItem>;
      })}
    </List>
  );
};

export default MessageList;


