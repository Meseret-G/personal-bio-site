import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Routes from '../routes/index';
import Navbar from '../components/Navbar/Navbar';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObject = {
          uid: authed.uid,
          fullName: authed.displayName,
          profilePic: authed.photoURL,
          isAdmin: process.env.REACT_APP_ADMIN_UID === authed.uid,
        };
        setUser(userObject);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="app">
      <Navbar user={user} />
      <Routes user={user} />
    </div>
  );
}

export default Initialize;
