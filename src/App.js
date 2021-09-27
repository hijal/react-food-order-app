import { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layouts/Header';
import Meals from './components/Meals/Meals';
import { CartProvider } from './context/CartProvider';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const cartShownHandler = () => {
    setIsCartShown(true);
  };
  const cartHideHandler = () => {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onCartClose={cartHideHandler} />}
      <Header onCartShown={cartShownHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
