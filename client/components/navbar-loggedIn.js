import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material UI imports
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

const loggedIn = ({ user, logout }) => {
  let name;
  if (user.displayName) name = user.displayName;
  else if (user.email) name = user.email;
  else name = 'developer!';
  return (
    <div style={{ display: 'flex', paddingRight: '20px' }}>
      <h5 style={{ color: 'white', paddingRight: '20px' }}>{`Welcome, ${name}`}</h5>
      <IconMenu
        iconButtonElement={
          <IconButton className="AVATAR" style={{ padding: '0px' }}>
            <Avatar
              src={
                user.photoURL
                ? user.photoURL
                : 'https://i0.wp.com/www.thisblogrules.com/wp-content/uploads/2010/02/batman-for-facebook.jpg?resize=250%2C280'
              }
            />
          </IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to={`/users/${user.uid}`} >
          <MenuItem primaryText="Profile" />
        </Link>
        <Link to={`/users/${user.uid}/notebooks`} >
          <MenuItem primaryText="Notebooks" />
        </Link>
        <MenuItem primaryText="Sign out" onClick={() => logout()} />
      </IconMenu>
    </div>
  );
};

export default loggedIn;
