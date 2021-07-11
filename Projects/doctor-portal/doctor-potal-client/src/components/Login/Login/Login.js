import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../../App';
import loginBg from '../../../images/loginBg.png';
import firebaseConfig from './firebase.config';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false,
  });

  const handleBlur = event => {
    let isFieldValid = true;
    if (event.target.name === 'name') {
      isFieldValid = /^([a-zA-Z ]){2,30}$/.test(event.target.value);
    }
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };

  const handleLogin = () => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserInfo(user.name);
        })
        .catch(error => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          storeAuthToken();
        })
        .catch(error => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
  };

  const updateUserInfo = name => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log('user Name Update Successfully');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('authToken', idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div className='login-page container'>
      <div className='row align-items-center' style={{ height: '100vh' }}>
        <div className='col-md-6 shadow p-5'>
          {newUser && (
            <div className='form-group'>
              <label htmlFor=''>User Name</label>
              <input
                onBlur={handleBlur}
                name='name'
                type='text'
                className='form-control'
              />
            </div>
          )}
          <div className='form-group'>
            <label htmlFor=''>User Email</label>
            <input
              onBlur={handleBlur}
              name='email'
              type='text'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Password</label>
            <input
              onBlur={handleBlur}
              name='password'
              type='password'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='' className='text-danger'>
              Forgot your password?
            </label>
          </div>
          <div className='from-group mt-4 d-flex justify-content-between'>
            <div>
              <button className='btn btn-brand' onClick={handleLogin}>
                {newUser ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
            <div className='text-right'>
              <button
                className='btn btn-brand'
                onClick={() => setNewUser(!newUser)}
              >
                {newUser ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </div>
          <p className='text-danger'>{user.error}</p>
          {user.success && (
            <p className='text-success'>
              User {newUser ? 'Created' : 'Logged In'} Successfully
            </p>
          )}
        </div>
        <div className='col-md-6 d-none d-md-block align-self-end'>
          <img className='img-fluid' src={loginBg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Login;
