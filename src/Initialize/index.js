import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import SignIn from '../views/SignIn';
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
          user: authed.email.split('@')[0],
        };
        setUser(userObject);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {user ? (
        <>
          <h1> Personal Portfolio </h1>
        </>
      ) : (
        <SignIn user={user} />
      )}
    </div>
  );
}

export default Initialize;
