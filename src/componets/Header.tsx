import React from 'react';
import '../styles/header.css';

import Avatar from './Avatar';

function Header<Any>() {
  return (
    <div className='header'>
      <div className='banner'>
        <img
          className='banner_img'
          src='https://pbs.twimg.com/profile_banners/1194591586761396225/1603052791/600x200'
          alt=''
        />
      </div>
      <div className='header_avatar'>
        <Avatar />
      </div>
      <div className='details'>
        <h2>Name</h2>
        <h3>@username</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default Header;
