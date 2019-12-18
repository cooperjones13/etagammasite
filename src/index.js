import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer.js';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import * as firebase from "firebase/app";
import 'firebase/firestore';
import  'firebase/database'
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyC2-ydIMLF0mAWAsY2YzYzh95B79mDEUho",
    authDomain: "thetatau-etagamma-members.firebaseapp.com",
    databaseURL: "https://thetatau-etagamma-members.firebaseio.com",
    projectId: "thetatau-etagamma-members",
    storageBucket: "thetatau-etagamma-members.appspot.com",
    messagingSenderId: "320221233827",
    appId: "1:320221233827:web:e350efd2eb66d4b75ab516",
    measurementId: "G-0HH8DWH66W"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig)


const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument(getFirebase))
    ));
const rrfProps = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}
ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
