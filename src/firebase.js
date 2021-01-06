// firebaseをimport
import firebase from 'firebase'

const  {
  REACT_APP_FIREBASE_API_KEY ,
  REACT_APP_FIREBASE_AUTH_DOMAIN ,
  REACT_APP_FIREBASE_DATABASE_URL ,
  REACT_APP_FIREBASE_PROJECT_ID ,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID 
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID 
};

//initialize(初期化)
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();
//databaseの中の特定の名前空間に対するreference(参照)を作成。
export const messagesRef = database.ref("messages");
//関数の作成
export const pushMessage = ({name,text}) => messagesRef.push({
  name,
  text
})
