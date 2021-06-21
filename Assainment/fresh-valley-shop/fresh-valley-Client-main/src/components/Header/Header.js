import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const LoginUserImg = loggedInUser.userpicture;
  const LoginUserName = loggedInUser.username;

  const [admin, setAdmin] = useState();
  console.log(admin);
  useEffect(() => {
    fetch(
      'https://fierce-cliffs-17399.herokuapp.com/getAdmin?email=' +
        loggedInUser.email
    )
      .then(res => res.json())
      .then(data => setAdmin(data[0]));
  }, []);

  function navBar() {
    const navBar = document.getElementById('MainMenu');
    if (navBar.className === 'MainMenu') {
      navBar.className = 'Responsive';
    } else {
      navBar.className = 'MainMenu';
    }
  }
  const reLoadPage = () => {
    window.location.reload(true);
  };
  return (
    <div>
      <header>
        <div id='result'></div>
        <div className='container'>
          <div className='Logo'>
            <Link className='navbar-brand' to='/'>
              FRESH VALLEY
            </Link>
          </div>
          <nav className='MainMenu' id='MainMenu'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/orders'>Orders</Link>
              </li>
              <li>
                <Link to='#'>Best Deals</Link>
              </li>
              <li>
                <Link to='/admin'>Admin</Link>
              </li>
              <li>
                {loggedInUser.useremail ? (
                  <a
                    className='LUser'
                    title={LoginUserName}
                    href='#'
                    onClick={() => reLoadPage()}
                  >
                    <img src={LoginUserImg} />
                    <span>Logout</span>
                  </a>
                ) : (
                  <Link to='/login'>
                    <span className='LoginBtn'>Login</span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <div className='NavBar'>
            <span onClick={navBar}>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
