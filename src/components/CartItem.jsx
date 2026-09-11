import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotalCost,
  selectCartTotalItems,
} from '../redux/CartSlice.jsx';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartTotalItems);
  const totalCost = useSelector(selectCartTotalCost);

  return (
    <main className="page-shell cart-page">
      <section className="page-intro cart-intro">
        <p className="eyebrow">Your cart</p>
        <h1>Shopping Cart</h1>
        <div className="cart-summary">
          <span>Total plants: {totalItems}</span>
          <span>Total cost: ${totalCost.toFixed(2)}</span>
        </div>
      </section>

      {items.length === 0 ? (
        <section className="empty-cart">
          <h2>Your cart is waiting for greenery.</h2>
          <p>Add a few plants from the collection to start your indoor garden.</p>
          <Link className="primary-button" to="/plants">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <>
          <section className="cart-list" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>Item total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="quantity-controls" aria-label={`${item.name} quantity`}>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease ${item.name}`}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase ${item.name}`}>
                    +
                  </button>
                </div>
                <button
                  className="delete-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
              </article>
            ))}
          </section>

          <section className="cart-actions">
            <button className="primary-button" onClick={() => alert('Coming Soon')}>
              Checkout: Coming Soon
            </button>
            <Link className="secondary-button" to="/plants">
              Continue Shopping
            </Link>
          </section>
        </>
      )}
    </main>
  );
}

export default CartItem;
