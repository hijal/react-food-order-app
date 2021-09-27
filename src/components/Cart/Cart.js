import { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import CartContext from '../../context/cart-context';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItem = cartCtx.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartCtx.removeItems(id);
  };

  const addItemToCartHandler = (item) => {
    cartCtx.addItems({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addItemToCartHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCartClose={props.onCartClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>= {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCartClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
