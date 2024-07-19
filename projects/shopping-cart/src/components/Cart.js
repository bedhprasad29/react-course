import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../feature/DataSlice'

export default function Cart() {
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch()
    return (
        <div className="display-content">
            <h1>Cart Items</h1>
            <ul>
                {
                    cartItems.map(item => (
                        <li key={item.id}>{item.name}
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}