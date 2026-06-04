importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBxH4lGkVHXQGnVSWy1TDr",
  authDomain: "smart-study-for-toppers.firebaseapp.com",
  projectId: "smart-study-for-toppers",
  storageBucket: "smart-study-for-toppers.appspot.com",
  messagingSenderId: "797534179941",
  appId: "1:797534179941:web:9764abba7"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background message received:', payload);
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body: body || '',
    icon: icon || '/icon.png',
    badge: '/icon.png'
  });
});
