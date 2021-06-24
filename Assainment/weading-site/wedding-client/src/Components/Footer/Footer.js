import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';

const Footer = () => {
  const mostPopular = [
    { name: 'Professional Driver', link: '/emergency' },
    { name: 'Fitness Bootcamp', link: '/' },
    { name: 'Self Defence Training Bootcamp', link: '/' },
    { name: 'Bodyguard for School Student', link: '/' },
  ];
  const ourAddress = [
    { name: 'New York - 101010 Hudson', link: '//google.com/map' },
    { name: 'Yards', link: '//google.com/map' },
  ];
  const projects = [
    { name: 'Fitness Bootcamp', link: '/' },
    { name: 'Self Defence Training Bootcamp', link: '/' },
    { name: 'Unarmed Combat Training', link: '/' },
    { name: 'Karate/Zudo Bootcamp', link: '/' },
  ];
  const services = [
    { name: 'Professional Driver', link: '/' },
    { name: 'Bodyguard for School Student', link: '/' },
    { name: 'Fitness Trainer', link: '/' },
    { name: 'Security Guard for House Appartment', link: '/' },
    { name: 'Bodyguard', link: '/bodyguard' },
  ];
  return (
    <footer className='footer-area clear-both'>
      <div className='container pt-5'>
        <div className='row py-5'>
          <FooterCol
            key={1}
            menuTitle={'Most Popular'}
            menuItems={mostPopular}
          />
          <FooterCol key={2} menuTitle='Services' menuItems={services} />
          <FooterCol key={3} menuTitle='Projects' menuItems={projects} />
          <FooterCol key={4} menuTitle='Our Address' menuItems={ourAddress}>
            <ul className='social-media list-inline'>
              <li className='list-inline-item'>
                <a href='//facebook.com'>
                  <FontAwesomeIcon
                    className='icon active-icon'
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='//google.com'>
                  <FontAwesomeIcon className='icon' icon={faGooglePlusG} />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='//instagram.com'>
                  <FontAwesomeIcon className='icon' icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className='mt-5'>
              <h6 style={{ color: 'lightblue' }}>Call now</h6>
              <button className='btn btn-primary'>+2025550295</button>
            </div>
          </FooterCol>
        </div>
        <div className='copyRight text-center'>
          <p style={{ color: 'lightblue' }}>
            Copyright {new Date().getFullYear()} All Rights Reserved by{' '}
            <a href=''></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
