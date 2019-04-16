import app from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDid8mXSDxVpVJ3mPvIlwFXrF_pQmIAO34',
  authDomain: 'foodtrackr-c265d.firebaseapp.com',
  databaseURL: 'https://foodtrackr-c265d.firebaseio.com',
  projectId: 'foodtrackr-c265d',
  storageBucket: 'foodtrackr-c265d.appspot.com',
  messagingSenderId: '803339051093'
};

export function InitializeFirebase() {
  app.initializeApp(config);
}