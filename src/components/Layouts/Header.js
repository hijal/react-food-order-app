import React, { Fragment } from 'react';
import mealLogo from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onCartShown={props.onCartShown} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealLogo} alt="react meal logo" />
      </div>
    </Fragment>
  );
};

export default Header;
