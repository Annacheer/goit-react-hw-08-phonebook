import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from '../hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
