// firebaseをimport
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyB1r3-eGL5MOvBgtpzAgir-aRoo0l3NkXg",
  authDomain: "react-chat-sample-4d82f.firebaseapp.com",
  databaseURL: "https://react-chat-sample-4d82f-default-rtdb.firebaseio.com",
  projectId: "react-chat-sample-4d82f",
  storageBucket: "react-chat-sample-4d82f.appspot.com",
  messagingSenderId: "618913037610",
  appId: "1:618913037610:web:716e3ae19ac1caf2dbf253"
};

//initialize(初期化)
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();
//databaseの中の特定の名前空間に対するreference(参照)を作成。
const messagesRef = database.ref("messages");
//関数の作成
export const pushMessage = ({name,text}) => messagesRef.push({
  name,
  text
})
