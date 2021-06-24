import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import logo from '../../favicon.png';
import GitHubIcon from '../../images/github.svg';
import GoogleIcon from '../../images/google.svg';
import { githubLogIn, googleLogin } from './Config/loginManager';
import './Login.css';

const Login = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/dashboard' } };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(res => {
        setLoggedinUser(res);
      })
      .then(data => {
        history.push(from);
      });
  };

  const handleGithubLogin = () => {
    githubLogIn()
      .then(res => {
        setLoggedinUser(res);
      })
      .then(data => {
        history.push(from);
      });
  };

  return (
    <div className='login'>
      <div className='logo text-center'>
        <img src={logo} alt='' />
      </div>
      <div className='text-center'>
        <h2>Login with google {loggedinUser.displayName}</h2>
        <button className='GoogleSignIn-Btn' onClick={handleGoogleLogin}>
          <img src={GoogleIcon} alt='Google Login' />{' '}
          <p>Continue with Google</p>
        </button>
        <br />
        <button className='GitHubSignIn-Btn' onClick={handleGithubLogin}>
          <img src={GitHubIcon} alt='Google Login' />{' '}
          <p>Continue with GitHub</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
