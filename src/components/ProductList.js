import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/slices/cartSlice'
import axios from 'axios'

function ProductList() {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await axios.get(`http://localhost:3000/Products`)
        let data = await response.data
        setProducts(data)
    }


    useEffect(() => {
        fetchProducts()
    }, [])


    const { cart } = useSelector(store => ({
        cart: store.cart.items
    }));
    const dispatch = useDispatch()
    const addCart = (item) => {
        dispatch(addToCart(item))
    }


    return (

        <main>
            <section className="cart-area pb-120 pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Add Cart</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                products && products.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="product-thumbnail"><a><img
                                                            src={process.env.PUBLIC_URL + item.image} alt="" /></a></td>
                                                        <td className="product-name"><a >{item.name}</a></td>
                                                        <td className="product-price"><span className="amount">${item.oldPrice}</span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <button onClick={() => addCart(item)} className="tp-btn-h1">Add To Cart</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )
}

export default ProductList