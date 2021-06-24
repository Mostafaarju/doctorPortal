import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import Admin from './Admin/Admin';
import './Dashboard.css';
import UserDashboard from './UserDashboard/UserDashboard';
const Dashboard = () => {
  const [loggedinUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch('https://agile-castle-83860.herokuapp.com/checkAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedinUser.email }),
    })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, []);
  return (
    <div>
      {/* <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5vw',  height: 'auto', color: '#333' }}>
                <Link to='/'><img height='60px' src={logo} alt="logo" /></Link>
                <h3>Title</h3>
                <h4>{loggedinUser.displayName}</h4>
            </nav> */}
      <Navbar></Navbar>
      {isAdmin ? <Admin></Admin> : <UserDashboard></UserDashboard>}
    </div>
  );
};

export default Dashboard;
