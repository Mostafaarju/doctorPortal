import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../favicon.png';
import './Navbar.css';

const Navbar = () => {
  const [loggedinUser] = useContext(UserContext);
  // const LoginUserImg = loggedinUser.userpicture;
  // const LoginUserName = loggedinUser.username;
  const LogInUserImg = loggedinUser.photoURL;
  const LogInUserName = loggedinUser.displayName;

  const reLoadPage = () => {
    window.location.reload(true);
  };
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img height='60px' src={logo} alt='' />
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div className='collaspe navbar-collapse ' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/service'>
                Service
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/dashboard'>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              {loggedinUser.email ? (
                <a
                  className='LUser'
                  title={LogInUserName}
                  href='#'
                  onClick={() => reLoadPage()}
                >
                  <img src={LogInUserImg} />
                  <span>Logout</span>
                </a>
              ) : (
                <Link className='button nav-link' to='login'>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
