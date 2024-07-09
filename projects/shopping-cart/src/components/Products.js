import { useDispatch, useSelector } from "react-redux"
import { addToCart } from '../feature/UserSlice'

export default function Products() {
    const products = useSelector(state => state.products)
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Product Lists</h1>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>{product.name}
                            <button onClick={() => dispatch(addToCart(product.name))}>Add to Cart</button>
                        </li>
                    ))
                }
            </ul>
            {
                cartItems.map(item => (
                    <li>{item.name}</li>
                ))
            }
        </>
    )
}