import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyBlsaONQpkJwrzLa6MsmLVRHAaSS_SazPc",
  authDomain: "react-02-630112418079.firebaseapp.com",
  projectId: "react-02-630112418079",
  storageBucket: "react-02-630112418079.appspot.com",
  messagingSenderId: "666641191955",
  appId: "1:666641191955:web:31ac9f044cc169836b9be6"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "AAAAmzbpVBM:APA91bHFWpnGWZnYjl5IvbnwvxpYHClvRFaV3sdqVn-myxTZyJ2aNe05O73QqUPR-FvdInOk9NUi-tOQPZCHaVDTNrdNe3AdkRD19Fq83eckUl24oE6TYQvorZiOwHcAKW9t1vAldFPU"
);

export { messaging };
