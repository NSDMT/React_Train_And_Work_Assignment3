import React, {Component} from 'react';

class Cart extends Component {
    render() {
        return (
            <main>
                <div className="page-banner-area page-banner-height-2"
                     data-background="assets/img/banner/page-banner-4.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page-banner-content text-center">
                                    <h4 className="breadcrumb-title">Your Cart</h4>
                                    <div className="breadcrumb-two">
                                        <nav>
                                            <nav className="breadcrumb-trail breadcrumbs">
                                                <ul className="breadcrumb-menu">
                                                    <li className="breadcrumb-trail">
                                                        <a href="index.html"><span>Home</span></a>
                                                    </li>
                                                    <li className="trail-item">
                                                        <span>Cart</span>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="cart-area pt-120 pb-120">
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
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="product-thumbnail"><a href="shop-details.html"><img
                                                    src={process.env.PUBLIC_URL +"/img/cart/shop-p-10.jpg"} alt=""/></a></td>
                                                <td className="product-name"><a href="shop-details.html">Jacket
                                                    light</a></td>
                                                <td className="product-price"><span className="amount">$130.00</span>
                                                </td>
                                                <td className="product-quantity">
                                                    <div className="cart-plus-minus"><input type="text"
                                                                                            defaultValue={1}/>
                                                        <div className="dec qtybutton">-</div>
                                                        <div className="inc qtybutton">+</div>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$130.00</span>
                                                </td>
                                                <td className="product-remove"><a href="#"><i className="fa fa-times"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail"><a href="shop-details.html"><img
                                                    src={process.env.PUBLIC_URL +"/img/cart/shop-p-11.jpg"} alt=""/></a></td>
                                                <td className="product-name"><a href="shop-details.html">Jacket Pink</a>
                                                </td>
                                                <td className="product-price"><span className="amount">$120.50</span>
                                                </td>
                                                <td className="product-quantity">
                                                    <div className="cart-plus-minus"><input type="text"
                                                                                            defaultValue={1}/>
                                                        <div className="dec qtybutton">-</div>
                                                        <div className="inc qtybutton">+</div>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$120.50</span>
                                                </td>
                                                <td className="product-remove"><a href="#"><i className="fa fa-times"/></a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="coupon-all">
                                                <div className="coupon">
                                                    <input id="coupon_code" className="input-text" name="coupon_code"
                                                           defaultValue placeholder="Coupon code" type="text"/>
                                                    <button className="tp-btn-h1" name="apply_coupon"
                                                            type="submit">Apply
                                                        coupon
                                                    </button>
                                                </div>
                                                <div className="coupon2">
                                                    <button className="tp-btn-h1" name="update_cart"
                                                            type="submit">Update cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-end">
                                        <div className="col-md-5">
                                            <div className="cart-page-total">
                                                <h2>Cart totals</h2>
                                                <ul className="mb-20">
                                                    <li>Subtotal <span>$250.00</span></li>
                                                    <li>Total <span>$250.00</span></li>
                                                </ul>
                                                <a className="tp-btn-h1" href="checkout.html">Proceed to checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cta-area d-ldark-bg pt-55 pb-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="cta-item cta-item-d mb-30">
                                    <h5 className="cta-title">Follow Us</h5>
                                    <p>We make consolidating, marketing and tracking your social media website easy.</p>
                                    <div className="cta-social">
                                        <div className="social-icon">
                                            <a href="#" className="facebook"><i className="fab fa-facebook-f"/></a>
                                            <a href="#" className="twitter"><i className="fab fa-twitter"/></a>
                                            <a href="#" className="youtube"><i className="fab fa-youtube"/></a>
                                            <a href="#" className="linkedin"><i className="fab fa-linkedin-in"/></a>
                                            <a href="#" className="rss"><i className="fas fa-rss"/></a>
                                            <a href="#" className="dribbble"><i className="fab fa-dribbble"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="cta-item mb-30">
                                    <h5 className="cta-title">Sign Up To Newsletter</h5>
                                    <p>Join 60.000+ subscribers and get a new discount coupon on every Saturday.</p>
                                    <div className="subscribe__form">
                                        <form action="#">
                                            <input type="email" placeholder="Enter your email here..."/>
                                            <button>subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="cta-item mb-30">
                                    <h5 className="cta-title">Download App</h5>
                                    <p>DukaMarket App is now available on App Store &amp; Google Play. Get it now.</p>
                                    <div className="cta-apps">
                                        <div className="apps-store">
                                            <a href="#"><img src={process.env.PUBLIC_URL +"/img/brand/app_ios.png"} alt=""/></a>
                                            <a href="#"><img src={process.env.PUBLIC_URL +"/img/brand/app_android.png"} alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        );
    }
}

export default Cart;