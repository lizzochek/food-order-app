import { Fragment } from 'react';
import img from '../../assets/meals.jpeg';
import HeaderCart from './HeaderCart';
import './Header.css';

export default function Header({ showCart }) {
  return (
    <Fragment>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCart showCart={showCart} />
      </header>
      <div className='main-image'>
        <img
          src={img}
          alt='meals'
        />
      </div>
    </Fragment>
  );
}
