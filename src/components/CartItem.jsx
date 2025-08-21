import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty } from '../reduxStore/features/cartSlice';
import "./style.css";

function CartItem() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            {/* cart headeing */}
            <h2 style={{ textAlign: "center" }}>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                // cart items 
                cartItems.map(item => (
                    <div key={item.id} style={{ display: "flex", justifyContent: "center" }}>
                        <div className="cart-item-box">
                            <div className="cart-image">
                                <img src={item.image} width="50" alt={item.title} />
                            </div>
                            <div className='cart-details'>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <p>
                                    Quantity:
                                    <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                                    {item.quantity}
                                    <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                                </p>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
            {/* subtotal of all the cart items */}
            <h3 style={{ textAlign: "center" }}>Subtotal: ${subtotal.toFixed(2)}</h3>
        </div>
    );
}

export default CartItem;
