import { useState } from 'react'

export default function Cart() {
    const item = [{ id: 1, name: "IPhone" }, { id: 2, name: "Cover" }]

    const [items, setItems] = useState(item)

    const handleItemDelete = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <div className="container mt-4">
            <h2>Shopping Cart</h2>
            {items.map(item => (
                <div key={item.id} className="items">
                    <p>{item.name}</p>
                    <button onClick={handleItemDelete(item.id)}>X</button>
                </div>
            ))}
            <button className="btn btn-success">Checkout</button>
        </div>
    );
}