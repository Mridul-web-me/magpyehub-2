import { useState, useEffect } from 'react';
import initializeFirebase from '../Component/LoginForm/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, updatePassword, sendPasswordResetEmail, getIdToken } from 'firebase/auth';
import { clearTheCart } from '../fakeDB';

//Initialize Firebase App
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [newPass, setNewPass] = useState({});
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(true);
  const [isLoading3, setIsLoading3] = useState(true);
  const [authRegError, setRegAuthError] = useState('');
  const [authLoginError, setLoginAuthError] = useState('');

  const auth = getAuth();

  const registerUser = (email, password, name, phone, address1, address2, townCity, country, postcode, telephone, history, location) => {
    // console.log(email, password);
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password, name, phone, address1, address2, country, townCity, postcode, telephone)
      .then(result => {
        setRegAuthError('');
        const newUser = { email, displayName: name, phone: phone, address1: address1, address2: address2, townCity: townCity, country: country, postcode: postcode, telephone: telephone };
        console.log(newUser);
        // Send name to firebase after creation

        updateProfile(auth.currentUser, {
          displayName: name
        })
          .then(() => {})
          .catch(error => {});
        setUser(newUser);
        saveUser(email, name, phone, address1, address2, townCity, country, postcode, telephone, 'POST');
        history('/');
      })
      .catch(error => {
        setRegAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loginUser = (email, password, history, location) => {
    // console.log(email, password);
    setIsLoading2(true);
    setIsLoading3(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setLoginAuthError('');
        const destination = location?.state?.from || '/';
        console.log(destination);
        history(destination);
      })
      .catch(error => {
        setLoginAuthError(error.message);
      })
      .finally(() => {
        setIsLoading2(false);
        setIsLoading3(false);
      });
  };

  const passChange = password => {
    setIsLoading(true);
    const user = auth.currentUser;
    const newPassword = setNewPass('');
    //getASecureRandomPassword();

    updatePassword(user, newPassword)
      .then(() => {
        // Update successful.
      })
      .catch(error => {
        // An error ocurred
        // ...
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const resetPassword = email => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch(error => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Observe User State
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        getIdToken(user).then(idToken => {
          const newLocal = localStorage.setItem('idToken', idToken);
          setToken(newLocal);
        });
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading2(false);
      setIsLoading3(false);
    });
    return () => unSubscribe;
  }, []);

  const logOut = history => {
    setIsLoading2(true);
    signOut(auth)
      .then(() => {
        history('/');
        clearTheCart();
      })
      .catch(error => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading2(false);
      });
  };

  useEffect(() => {
    fetch(`https://magpyehub-server.onrender.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin);
      });
  }, [user.email]);

  const saveUser = (email, displayName, phone, address1, address2, townCity, country, postcode, telephone, method) => {
    const user = { email, displayName, phone, address1, address2, townCity, country, postcode, telephone };
    fetch('https://magpyehub-server.onrender.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then();
  };

  return {
    user,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    isLoading2,
    isLoading3,
    authRegError,
    authLoginError,
    resetPassword,
    newPass,
    passChange,
    token,
    admin
  };
};

export default useFirebase;
