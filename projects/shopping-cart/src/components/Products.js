import { useDispatch, useSelector } from "react-redux"
import { addToCart } from '../feature/DataSlice'

export default function Products() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    return (
        <div className="display-content">
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
        </div>
    )
}