import React, {Component} from 'react';

class Categories extends Component {
    render() {
        return (
            <main>
                <section className="breadcrumb__area box-plr-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="breadcrumb__wrapper">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Shop</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="shop-area mb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4">
                                <div className="product-widget mb-30">
                                    <h5 className="pt-title">Product categories</h5>
                                    <div className="widget-category-list mt-20">
                                        <form action="#">
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-1" name="cat-item"/>
                                                <label
                                                    htmlFor="cat-item-1">Clothing &amp; Apparel <span>(12)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-2" name="cat-item"/>
                                                <label htmlFor="cat-item-2">Consumer Electrics <span>(60)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-3" name="cat-item"/>
                                                <label
                                                    htmlFor="cat-item-3">Computers &amp; Technologies <span>(41)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-4" name="cat-item"/>
                                                <label
                                                    htmlFor="cat-item-4">Phones &amp; Accessories <span>(28)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-5" name="cat-item"/>
                                                <label htmlFor="cat-item-5">Babies &amp; Moms <span>(21)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-7" name="cat-item"/>
                                                <label htmlFor="cat-item-7">Books &amp; Office <span>(62)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-8" name="cat-item"/>
                                                <label htmlFor="cat-item-8">Sport &amp; Outdoo <span>(22)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-9" name="cat-item"/>
                                                <label
                                                    htmlFor="cat-item-9">Chairs &amp; Stools <span>(20)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-10" name="cat-item"/>
                                                <label
                                                    htmlFor="cat-item-10">Furniture &amp; Acessories <span>(06)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-11" name="cat-item"/>
                                                <label
                                                    htmlFor="cat-item-11">Kitchen &amp; Tableware <span>(30)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-12" name="cat-item"/>
                                                <label htmlFor="cat-item-12">Lighting <span>(30)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="cat-item-13" name="cat-item"/>
                                                <label
                                                    htmlFor="cat-item-13">Armchairs &amp; Chaises <span>(30)</span></label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="product-widget mb-30">
                                    <h5 className="pt-title">Filter By Price</h5>
                                    <div className="price__slider mt-30">
                                        <div id="slider-range"
                                             className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                            <div className="ui-slider-range ui-corner-all ui-widget-header"
                                                 style={{left: '0%', width: '100%'}}/>
                                            <span tabIndex={0}
                                                  className="ui-slider-handle ui-corner-all ui-state-default"
                                                  style={{left: '0%'}}/><span tabIndex={0}
                                                                              className="ui-slider-handle ui-corner-all ui-state-default"
                                                                              style={{left: '100%'}}/></div>
                                        <div>
                                            <form action="#" className="s-form mt-20">
                                                <input type="text" id="amount" readOnly/>
                                                <button type="submit" className="tp-btn-square-lg">Filter</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-widget mb-30">
                                    <h5 className="pt-title">Choose Color</h5>
                                    <div className="product__color mt-20">
                                        <ul>
                                            <li>
                                                <a href="#" className="black"/>
                                            </li>
                                            <li>
                                                <a href="#" className="blue"/>
                                            </li>
                                            <li>
                                                <a href="#" className="red"/>
                                            </li>
                                            <li>
                                                <a href="#" className="yellow"/>
                                            </li>
                                            <li>
                                                <a href="#" className="pink"/>
                                            </li>
                                            <li>
                                                <a href="#" className="brown"/>
                                            </li>
                                            <li>
                                                <a href="#" className="green"/>
                                            </li>
                                            <li>
                                                <a href="#" className="oragne"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-widget mb-30">
                                    <h5 className="pt-title">Choose Rating</h5>
                                    <div className="widget-category-list mt-20">
                                        <form action="#">
                                            <div className="single-widget-rating">
                                                <input type="checkbox" id="star-item-1" name="star-item"/>
                                                <label htmlFor="star-item-1">
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <span>(54)</span>
                                                </label>
                                            </div>
                                            <div className="single-widget-rating">
                                                <input type="checkbox" id="star-item-2" name="star-item"/>
                                                <label htmlFor="star-item-2">
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fal fa-star"/>
                                                    <span>(37)</span>
                                                </label>
                                            </div>
                                            <div className="single-widget-rating">
                                                <input type="checkbox" id="star-item-3" name="star-item"/>
                                                <label htmlFor="star-item-3">
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fal fa-star"/>
                                                    <i className="fal fa-star"/>
                                                    <span>(7)</span>
                                                </label>
                                            </div>
                                            <div className="single-widget-rating">
                                                <input type="checkbox" id="star-item-4" name="star-item"/>
                                                <label htmlFor="star-item-4">
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fal fa-star"/>
                                                    <i className="fal fa-star"/>
                                                    <i className="fal fa-star"/>
                                                    <span>(5)</span>
                                                </label>
                                            </div>
                                            <div className="single-widget-rating">
                                                <input type="checkbox" id="star-item-5" name="star-item"/>
                                                <label htmlFor="star-item-5">
                                                    <i className="fas fa-star"/>
                                                    <i className="fal fa-star"/>
                                                    <i className="fal fa-star"/>
                                                    <i className="fal fa-star"/>
                                                    <i className="fal fa-star"/>
                                                    <span>(3)</span>
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="product-widget mb-30">
                                    <h5 className="pt-title">Choose Size</h5>
                                    <div className="widget-category-list mt-20">
                                        <form action="#">
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="choose-item-1" name="choose-item"/>
                                                <label htmlFor="choose-item-1">S <span>(12)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="choose-item-2" name="choose-item"/>
                                                <label htmlFor="choose-item-2">L <span>(60)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="choose-item-3" name="choose-item"/>
                                                <label htmlFor="choose-item-3">M <span>(41)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="choose-item-4" name="choose-item"/>
                                                <label htmlFor="choose-item-4">XXL <span>(28)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="choose-item-5" name="choose-item"/>
                                                <label htmlFor="choose-item-5">2XL <span>(21)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="choose-item-7" name="choose-item"/>
                                                <label htmlFor="choose-item-7">3XL <span>(62)</span></label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="product-widget mb-30">
                                    <h5 className="pt-title">Choose Brand</h5>
                                    <div className="widget-category-list mt-20">
                                        <form action="#">
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="brand-item-1" name="brand-item"/>
                                                <label htmlFor="brand-item-1">CarRentals <span>(12)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="brand-item-2" name="brand-item"/>
                                                <label htmlFor="brand-item-2">CarVoodoo <span>(60)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="brand-item-3" name="brand-item"/>
                                                <label htmlFor="brand-item-3">Creative <span>(41)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="brand-item-4" name="brand-item"/>
                                                <label htmlFor="brand-item-4">Impact <span>(28)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="brand-item-5" name="brand-item"/>
                                                <label htmlFor="brand-item-5">IQVia <span>(21)</span></label>
                                            </div>
                                            <div className="single-widget-category">
                                                <input type="checkbox" id="brand-item-7" name="brand-item"/>
                                                <label htmlFor="brand-item-7">LeadsGreen <span>(62)</span></label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="product-widget mb-30">
                                    <h5 className="pt-title">Special Offers</h5>
                                    <div className="product__sm mt-20">
                                        <ul>
                                            <li className="product__sm-item d-flex align-items-center">
                                                <div className="product__sm-thumb mr-20">
                                                    <a href="product-details.html">
                                                        <img src={process.env.PUBLIC_URL + "/img/product/sm-1.jpg"}
                                                             alt=""/>
                                                    </a>
                                                </div>
                                                <div className="product__sm-content">
                                                    <h5 className="product__sm-title">
                                                        <a href="product-details.html">Classic Leather Backpack Daypack
                                                            2022</a>
                                                    </h5>
                                                    <div className="product__sm-price">
                                                        <span className="price">$300.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="product__sm-item d-flex align-items-center">
                                                <div className="product__sm-thumb mr-20">
                                                    <a href="product-details.html">
                                                        <img src={process.env.PUBLIC_URL + "/img/product/sm-1.jpg"}
                                                             alt=""/>
                                                    </a>
                                                </div>
                                                <div className="product__sm-content">
                                                    <h5 className="product__sm-title">
                                                        <a href="product-details.html">Samsung Galaxy A12, 32GB, Black -
                                                            (Locked)</a>
                                                    </h5>
                                                    <div className="product__sm-price">
                                                        <span className="price">$150.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="product__sm-item d-flex align-items-center">
                                                <div className="product__sm-thumb mr-20">
                                                    <a href="product-details.html">
                                                        <img src={process.env.PUBLIC_URL + "/img/product/sm-1.jpg"}
                                                             alt=""/>
                                                    </a>
                                                </div>
                                                <div className="product__sm-content">
                                                    <h5 className="product__sm-title">
                                                        <a href="#">Coffee Maker AH240a Full Function</a>
                                                    </h5>
                                                    <div className="product__sm-price">
                                                        <span className="price">$300.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="product__sm-item d-flex align-items-center">
                                                <div className="product__sm-thumb mr-20">
                                                    <a href="product-details.html">
                                                        <img src={process.env.PUBLIC_URL + "/img/product/sm-1.jpg"}
                                                             alt=""/>
                                                    </a>
                                                </div>
                                                <div className="product__sm-content">
                                                    <h5 className="product__sm-title">
                                                        <a href="product-details.html">Imported Wooden Felt Cushion
                                                            Chair</a>
                                                    </h5>
                                                    <div className="product__sm-price">
                                                        <span className="price">$120.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="product__sm-item d-flex align-items-center">
                                                <div className="product__sm-thumb mr-20">
                                                    <a href="product-details.html">
                                                        <img src={process.env.PUBLIC_URL + "/img/product/sm-1.jpg"}
                                                             alt=""/>
                                                    </a>
                                                </div>
                                                <div className="product__sm-content">
                                                    <h5 className="product__sm-title">
                                                        <a href="product-details.html">Sunhouse Decorative Lights -
                                                            Imported</a>
                                                    </h5>
                                                    <div className="product__sm-price">
                                                        <span className="price">$110.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="shop-banner mb-30">
                                    <div className="banner-image">
                                        <img className="banner-l"
                                             src={process.env.PUBLIC_URL + "/img/banner/sl-banner.jpg"} alt=""/>
                                        <img className="banner-sm"
                                             src={process.env.PUBLIC_URL + "/img/banner/sl-banner-sm.png"} alt=""/>
                                        <div className="banner-content text-center">
                                            <p className="banner-text mb-30">Hurry Up! <br/> Free Shipping All Order
                                                Over $99</p>
                                            <a href="shop.html" className="st-btn-d b-radius">Discover now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-lists-top">
                                    <div className="product__filter-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div className="product__filter d-sm-flex align-items-center">
                                                    <div className="product__col">
                                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                            <li className="nav-item" role="presentation">
                                                                <button className="nav-link active" id="FourCol-tab"
                                                                        data-bs-toggle="tab" data-bs-target="#FourCol"
                                                                        type="button" role="tab" aria-controls="FourCol"
                                                                        aria-selected="true">
                                                                    <i className="fal fa-th"/>
                                                                </button>
                                                            </li>
                                                            <li className="nav-item" role="presentation">
                                                                <button className="nav-link" id="FiveCol-tab"
                                                                        data-bs-toggle="tab" data-bs-target="#FiveCol"
                                                                        type="button" role="tab" aria-controls="FiveCol"
                                                                        aria-selected="false">
                                                                    <i className="fal fa-list"/>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__result pl-60">
                                                        <p>Showing 1-20 of 29 relults</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div
                                                    className="product__filter-right d-flex align-items-center justify-content-md-end">
                                                    <div className="product__sorting product__show-no">
                                                        <select>
                                                            <option>10</option>
                                                            <option>20</option>
                                                            <option>30</option>
                                                            <option>40</option>
                                                        </select>
                                                    </div>
                                                    <div className="product__sorting product__show-position ml-20">
                                                        <select>
                                                            <option>Latest</option>
                                                            <option>New</option>
                                                            <option>Up comeing</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content" id="productGridTabContent">
                                    <div className="tab-pane fade  show active" id="FourCol" role="tabpanel"
                                         aria-labelledby="FourCol-tab">
                                        <div className="tp-wrapper">
                                            <div className="row g-0">
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-2.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Men Size Yellow
                                                                Basketball Jerseys</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$110-$150</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-3.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Xbox Wireless Game
                                                                Controller Pink</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$130-$150</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-4.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Wireless Bluetooth
                                                                Over-Ear Headphones</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$135-$150</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-5.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Solo3 Wireless On-Ear
                                                                Headphones</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$140-$150</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-6.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Vifa Bluetooth Portable
                                                                Wireless Speaker</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$140-$200</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-7.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">APPO R11s 64GB Dual 20MP
                                                                Cameras</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$100-$120</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-10.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">G951s Pink Stereo Gaming
                                                                Headset</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$145-$150</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-9.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Epple iPhone 11 Pro Max
                                                                64GB Gold</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$120-$140</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-20.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Casentino Bucket Hat
                                                                Luxury Goods – Imported</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$110-$140</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-12.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Classic Leather Backpack
                                                                Daypack 2022</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$105-$140</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-13.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Coffee Maker AH240a Full
                                                                Function</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$170-$280</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Imported Wooden Felt
                                                                Cushion Chair</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$160-$280</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Sunhouse Decorative
                                                                Lights – Imported</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$120-$280</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Korea Stainless Steel Pot
                                                                Set 5 Piecs</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$125-$280</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">HP Stainless Steel Hot
                                                                Water Bottle</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$170-$280</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">The North Face Womens
                                                                Resolve 2 Jack</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$150-$280</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Diesel J Ross Rev Reversy
                                                                Bomber Jacket</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$180-$280</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">HOT – H&amp;M “Spring
                                                                Icons” Collaboration Jackets</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$200-$280</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Taffy Candy Laff Bites
                                                                Net 4.2 oz</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$105-$150</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img">
                                                                <a href="product-details.html">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                        alt="product"/>
                                                                </a>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId">
                                                                    <i className="fal fa-eye"/>
                                                                    <i className="fal fa-eye"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-heart"/>
                                                                    <i className="fal fa-heart"/>
                                                                </a>
                                                                <a href="#" className="icon-box icon-box-1">
                                                                    <i className="fal fa-layer-group"/>
                                                                    <i className="fal fa-layer-group"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3">
                                                            <h6><a href="product-details.html">Vinh Long Fresh
                                                                Mangosteen 500g</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                    <li><a href="#"><i className="fal fa-star"/></a>
                                                                    </li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price mb-10">
                                                                <span>$110-$120</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="FiveCol" role="tabpanel"
                                         aria-labelledby="FiveCol-tab">
                                        <div className="tp-wrapper-2">
                                            <div className="single-item-pd">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-9">
                                                        <div
                                                            className="single-features-item single-features-item-df b-radius mb-20">
                                                            <div className="row  g-0 align-items-center">
                                                                <div className="col-md-4">
                                                                    <div className="features-thum">
                                                                        <div className="features-product-image w-img">
                                                                            <a href="product-details.html">
                                                                                <img
                                                                                    src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                                    alt=""/></a>
                                                                        </div>
                                                                        <div className="product__offer">
                                                                            <span className="discount">-15%</span>
                                                                        </div>
                                                                        <div className="product-action">
                                                                            <a href="#" className="icon-box icon-box-1"
                                                                               data-bs-toggle="modal"
                                                                               data-bs-target="#productModalId">
                                                                                <i className="fal fa-eye"/>
                                                                                <i className="fal fa-eye"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-heart"/>
                                                                                <i className="fal fa-heart"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-layer-group"/>
                                                                                <i className="fal fa-layer-group"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div
                                                                        className="product__content product__content-d">
                                                                        <h6><a href="product-details.html">Classic
                                                                            Leather Backpack Daypack 2022</a></h6>
                                                                        <div className="rating mb-5">
                                                                            <ul className="rating-d">
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                            </ul>
                                                                            <span>(01 review)</span>
                                                                        </div>
                                                                        <div className="features-des">
                                                                            <ul>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Bass and
                                                                                    Stereo Sound.</a></li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Display
                                                                                    with 3088 x 1440 pixels resolution.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Memory,
                                                                                    Storage &amp; SIM: 12GB RAM, 256GB.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Androi
                                                                                    v10.0 Operating system.</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="product-stock mb-15">
                                                            <h5>Availability: <span> 940 in stock</span></h5>
                                                            <h6>$220.00 - <del> $240.00</del></h6>
                                                        </div>
                                                        <div className="stock-btn ">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-item-pd">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-9">
                                                        <div
                                                            className="single-features-item single-features-item-df b-radius mb-20">
                                                            <div className="row  g-0 align-items-center">
                                                                <div className="col-md-4">
                                                                    <div className="features-thum">
                                                                        <div className="features-product-image w-img">
                                                                            <a href="product-details.html">
                                                                                <img
                                                                                    src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                                    alt=""/></a>
                                                                        </div>
                                                                        <div className="product-action">
                                                                            <a href="#" className="icon-box icon-box-1"
                                                                               data-bs-toggle="modal"
                                                                               data-bs-target="#productModalId">
                                                                                <i className="fal fa-eye"/>
                                                                                <i className="fal fa-eye"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-heart"/>
                                                                                <i className="fal fa-heart"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-layer-group"/>
                                                                                <i className="fal fa-layer-group"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div
                                                                        className="product__content product__content-d">
                                                                        <h6><a href="product-details.html">Samsang
                                                                            Galaxy A70 128GB Dual-SIM</a></h6>
                                                                        <div className="rating mb-5">
                                                                            <ul className="rating-d">
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                            </ul>
                                                                            <span>(01 review)</span>
                                                                        </div>
                                                                        <div className="features-des">
                                                                            <ul>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Bass and
                                                                                    Stereo Sound.</a></li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Display
                                                                                    with 3088 x 1440 pixels resolution.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Memory,
                                                                                    Storage &amp; SIM: 12GB RAM, 256GB.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Androi
                                                                                    v10.0 Operating system.</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="product-stock mb-15">
                                                            <h5>Availability: <span> 940 in stock</span></h5>
                                                            <h6>$216.00</h6>
                                                        </div>
                                                        <div className="stock-btn ">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-item-pd">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-9">
                                                        <div
                                                            className="single-features-item single-features-item-df b-radius mb-20">
                                                            <div className="row  g-0 align-items-center">
                                                                <div className="col-md-4">
                                                                    <div className="features-thum">
                                                                        <div className="features-product-image w-img">
                                                                            <a href="product-details.html">
                                                                                <img
                                                                                    src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                                    alt=""/></a>
                                                                        </div>
                                                                        <div className="product-action">
                                                                            <a href="#" className="icon-box icon-box-1"
                                                                               data-bs-toggle="modal"
                                                                               data-bs-target="#productModalId">
                                                                                <i className="fal fa-eye"/>
                                                                                <i className="fal fa-eye"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-heart"/>
                                                                                <i className="fal fa-heart"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-layer-group"/>
                                                                                <i className="fal fa-layer-group"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div
                                                                        className="product__content product__content-d">
                                                                        <h6><a href="product-details.html">Coffee Maker
                                                                            AH240a Full Function</a></h6>
                                                                        <div className="rating mb-5">
                                                                            <ul className="rating-d">
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                            </ul>
                                                                            <span>(01 review)</span>
                                                                        </div>
                                                                        <div className="features-des">
                                                                            <ul>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Bass and
                                                                                    Stereo Sound.</a></li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Display
                                                                                    with 3088 x 1440 pixels resolution.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Memory,
                                                                                    Storage &amp; SIM: 12GB RAM, 256GB.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Androi
                                                                                    v10.0 Operating system.</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="product-stock mb-15">
                                                            <h5>Availability: <span> 940 in stock</span></h5>
                                                            <h6>$125.00</h6>
                                                        </div>
                                                        <div className="stock-btn ">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-item-pd">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-9">
                                                        <div
                                                            className="single-features-item single-features-item-df b-radius mb-20">
                                                            <div className="row  g-0 align-items-center">
                                                                <div className="col-md-4">
                                                                    <div className="features-thum">
                                                                        <div className="features-product-image w-img">
                                                                            <a href="product-details.html">
                                                                                <img
                                                                                    src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                                    alt=""/></a>
                                                                        </div>
                                                                        <div className="product-action">
                                                                            <a href="#" className="icon-box icon-box-1"
                                                                               data-bs-toggle="modal"
                                                                               data-bs-target="#productModalId">
                                                                                <i className="fal fa-eye"/>
                                                                                <i className="fal fa-eye"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-heart"/>
                                                                                <i className="fal fa-heart"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-layer-group"/>
                                                                                <i className="fal fa-layer-group"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div
                                                                        className="product__content product__content-d">
                                                                        <h6><a href="product-details.html">Imported
                                                                            Wooden Felt Cushion Chair</a></h6>
                                                                        <div className="rating mb-5">
                                                                            <ul className="rating-d">
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                            </ul>
                                                                            <span>(01 review)</span>
                                                                        </div>
                                                                        <div className="features-des">
                                                                            <ul>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Bass and
                                                                                    Stereo Sound.</a></li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Display
                                                                                    with 3088 x 1440 pixels resolution.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Memory,
                                                                                    Storage &amp; SIM: 12GB RAM, 256GB.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Androi
                                                                                    v10.0 Operating system.</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="product-stock mb-15">
                                                            <h5>Availability: <span> 940 in stock</span></h5>
                                                            <h6>$160.00</h6>
                                                        </div>
                                                        <div className="stock-btn ">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-item-pd">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-9">
                                                        <div
                                                            className="single-features-item single-features-item-df b-radius mb-20">
                                                            <div className="row  g-0 align-items-center">
                                                                <div className="col-md-4">
                                                                    <div className="features-thum">
                                                                        <div className="features-product-image w-img">
                                                                            <a href="product-details.html">
                                                                                <img
                                                                                    src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                                    alt=""/></a>
                                                                        </div>
                                                                        <div className="product__offer">
                                                                            <span className="discount">-15%</span>
                                                                        </div>
                                                                        <div className="product-action">
                                                                            <a href="#" className="icon-box icon-box-1"
                                                                               data-bs-toggle="modal"
                                                                               data-bs-target="#productModalId">
                                                                                <i className="fal fa-eye"/>
                                                                                <i className="fal fa-eye"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-heart"/>
                                                                                <i className="fal fa-heart"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-layer-group"/>
                                                                                <i className="fal fa-layer-group"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div
                                                                        className="product__content product__content-d">
                                                                        <h6><a href="product-details.html">Sunhouse
                                                                            Decorative Lights – Imported</a></h6>
                                                                        <div className="rating mb-5">
                                                                            <ul className="rating-d">
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                            </ul>
                                                                            <span>(01 review)</span>
                                                                        </div>
                                                                        <div className="features-des">
                                                                            <ul>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Bass and
                                                                                    Stereo Sound.</a></li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Display
                                                                                    with 3088 x 1440 pixels resolution.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Memory,
                                                                                    Storage &amp; SIM: 12GB RAM, 256GB.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Androi
                                                                                    v10.0 Operating system.</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="product-stock mb-15">
                                                            <h5>Availability: <span> 940 in stock</span></h5>
                                                            <h6>$125.00</h6>
                                                        </div>
                                                        <div className="stock-btn ">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-item-pd">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-9">
                                                        <div
                                                            className="single-features-item single-features-item-df b-radius mb-20">
                                                            <div className="row  g-0 align-items-center">
                                                                <div className="col-md-4">
                                                                    <div className="features-thum">
                                                                        <div className="features-product-image w-img">
                                                                            <a href="product-details.html">
                                                                                <img
                                                                                    src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                                    alt=""/></a>
                                                                        </div>
                                                                        <div className="product-action">
                                                                            <a href="#" className="icon-box icon-box-1"
                                                                               data-bs-toggle="modal"
                                                                               data-bs-target="#productModalId">
                                                                                <i className="fal fa-eye"/>
                                                                                <i className="fal fa-eye"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-heart"/>
                                                                                <i className="fal fa-heart"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-layer-group"/>
                                                                                <i className="fal fa-layer-group"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div
                                                                        className="product__content product__content-d">
                                                                        <h6><a href="product-details.html">Korea
                                                                            Stainless Steel Pot Set 5 Piecs</a></h6>
                                                                        <div className="rating mb-5">
                                                                            <ul className="rating-d">
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                            </ul>
                                                                            <span>(01 review)</span>
                                                                        </div>
                                                                        <div className="features-des">
                                                                            <ul>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Bass and
                                                                                    Stereo Sound.</a></li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Display
                                                                                    with 3088 x 1440 pixels resolution.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Memory,
                                                                                    Storage &amp; SIM: 12GB RAM, 256GB.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Androi
                                                                                    v10.0 Operating system.</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="product-stock mb-15">
                                                            <h5>Availability: <span> 940 in stock</span></h5>
                                                            <h6>$99</h6>
                                                        </div>
                                                        <div className="stock-btn ">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-item-pd">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-9">
                                                        <div
                                                            className="single-features-item single-features-item-df b-radius mb-20">
                                                            <div className="row  g-0 align-items-center">
                                                                <div className="col-md-4">
                                                                    <div className="features-thum">
                                                                        <div className="features-product-image w-img">
                                                                            <a href="product-details.html">
                                                                                <img
                                                                                    src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}

                                                                                    alt=""/></a>
                                                                        </div>
                                                                        <div className="product-action">
                                                                            <a href="#" className="icon-box icon-box-1"
                                                                               data-bs-toggle="modal"
                                                                               data-bs-target="#productModalId">
                                                                                <i className="fal fa-eye"/>
                                                                                <i className="fal fa-eye"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-heart"/>
                                                                                <i className="fal fa-heart"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-layer-group"/>
                                                                                <i className="fal fa-layer-group"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div
                                                                        className="product__content product__content-d">
                                                                        <h6><a href="product-details.html">HP Stainless
                                                                            Steel Hot Water Bottle</a></h6>
                                                                        <div className="rating mb-5">
                                                                            <ul className="rating-d">
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                            </ul>
                                                                            <span>(01 review)</span>
                                                                        </div>
                                                                        <div className="features-des">
                                                                            <ul>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Bass and
                                                                                    Stereo Sound.</a></li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Display
                                                                                    with 3088 x 1440 pixels resolution.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Memory,
                                                                                    Storage &amp; SIM: 12GB RAM, 256GB.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Androi
                                                                                    v10.0 Operating system.</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="product-stock mb-15">
                                                            <h5>Availability: <span> 940 in stock</span></h5>
                                                            <h6>$125.00</h6>
                                                        </div>
                                                        <div className="stock-btn ">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-item-pd">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-9">
                                                        <div
                                                            className="single-features-item single-features-item-df b-radius mb-20">
                                                            <div className="row  g-0 align-items-center">
                                                                <div className="col-md-4">
                                                                    <div className="features-thum">
                                                                        <div className="features-product-image w-img">
                                                                            <a href="product-details.html">
                                                                                <img
                                                                                    src={process.env.PUBLIC_URL + "/img/product/tp-14.jpg"}
                                                                                    alt=""/></a>
                                                                        </div>
                                                                        <div className="product-action">
                                                                            <a href="#" className="icon-box icon-box-1"
                                                                               data-bs-toggle="modal"
                                                                               data-bs-target="#productModalId">
                                                                                <i className="fal fa-eye"/>
                                                                                <i className="fal fa-eye"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-heart"/>
                                                                                <i className="fal fa-heart"/>
                                                                            </a>
                                                                            <a href="#" className="icon-box icon-box-1">
                                                                                <i className="fal fa-layer-group"/>
                                                                                <i className="fal fa-layer-group"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div
                                                                        className="product__content product__content-d">
                                                                        <h6><a href="product-details.html">The North
                                                                            Face Womens Resolve 2 Jack</a></h6>
                                                                        <div className="rating mb-5">
                                                                            <ul className="rating-d">
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                                <li><a href="#"><i
                                                                                    className="fal fa-star"/></a></li>
                                                                            </ul>
                                                                            <span>(01 review)</span>
                                                                        </div>
                                                                        <div className="features-des">
                                                                            <ul>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Bass and
                                                                                    Stereo Sound.</a></li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Display
                                                                                    with 3088 x 1440 pixels resolution.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Memory,
                                                                                    Storage &amp; SIM: 12GB RAM, 256GB.</a>
                                                                                </li>
                                                                                <li><a href="product-details.html"><i
                                                                                    className="fas fa-circle"/> Androi
                                                                                    v10.0 Operating system.</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="product-stock mb-15">
                                                            <h5>Availability: <span> 940 in stock</span></h5>
                                                            <h6>$140.00</h6>
                                                        </div>
                                                        <div className="stock-btn ">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                                Add to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">
                                                                Quick View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-pagination text-center">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="basic-pagination pt-30 pb-30">
                                                <nav>
                                                    <ul>
                                                        <li>
                                                            <a href="shop.html" className="active">1</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">2</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">3</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">5</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">6</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">
                                                                <i className="fal fa-angle-double-right"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="productModalId" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered product__modal" role="document">
                        <div className="modal-content">
                            <div className="product__modal-wrapper p-relative">
                                <div className="product__modal-close p-absolute">
                                    <button data-bs-dismiss="modal"><i className="fal fa-times"/></button>
                                </div>
                                <div className="product__modal-inner">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="product__modal-box">
                                                <div className="tab-content" id="modalTabContent">
                                                    <div className="tab-pane fade show active" id="nav1" role="tabpanel"
                                                         aria-labelledby="nav1-tab">
                                                        <div className="product__modal-img w-img">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-view-1.jpg"}
                                                                alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav2" role="tabpanel"
                                                         aria-labelledby="nav2-tab">
                                                        <div className="product__modal-img w-img">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-view-2.jpg"}
                                                                alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav3" role="tabpanel"
                                                         aria-labelledby="nav3-tab">
                                                        <div className="product__modal-img w-img">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-view-3.jpg"}
                                                                alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav4" role="tabpanel"
                                                         aria-labelledby="nav4-tab">
                                                        <div className="product__modal-img w-img">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-view-4.jpg"}
                                                                alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="nav nav-tabs" id="modalTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="nav1-tab"
                                                                data-bs-toggle="tab" data-bs-target="#nav1"
                                                                type="button" role="tab" aria-controls="nav1"
                                                                aria-selected="true">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-nav-1.jpg"}
                                                                alt=""/>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="nav2-tab" data-bs-toggle="tab"
                                                                data-bs-target="#nav2" type="button" role="tab"
                                                                aria-controls="nav2" aria-selected="false">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-nav-2.jpg"}
                                                                alt=""/>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="nav3-tab" data-bs-toggle="tab"
                                                                data-bs-target="#nav3" type="button" role="tab"
                                                                aria-controls="nav3" aria-selected="false">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-nav-3.jpg"}
                                                                alt=""/>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="nav4-tab" data-bs-toggle="tab"
                                                                data-bs-target="#nav4" type="button" role="tab"
                                                                aria-controls="nav4" aria-selected="false">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-nav-4.jpg"}
                                                                alt=""/>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="product__modal-content">
                                                <h4><a href="product-details.html">Samsung C49J89: £875, Debenhams
                                                    Plus</a></h4>
                                                <div className="product__review d-sm-flex">
                                                    <div className="rating rating__shop mb-10 mr-30">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"/></a></li>
                                                            <li><a href="#"><i className="fal fa-star"/></a></li>
                                                            <li><a href="#"><i className="fal fa-star"/></a></li>
                                                            <li><a href="#"><i className="fal fa-star"/></a></li>
                                                            <li><a href="#"><i className="fal fa-star"/></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__add-review mb-15">
                                                        <span>01 review</span>
                                                    </div>
                                                </div>
                                                <div className="product__price">
                                                    <span>$109.00 – $307.00</span>
                                                </div>
                                                <div className="product__modal-des mt-20 mb-15">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-circle"/> Bass and Stereo
                                                            Sound.</a></li>
                                                        <li><a href="#"><i className="fas fa-circle"/> Display with 3088
                                                            x 1440 pixels resolution.</a></li>
                                                        <li><a href="#"><i className="fas fa-circle"/> Memory,
                                                            Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                        <li><a href="#"><i className="fas fa-circle"/> Androi v10.0
                                                            Operating system.</a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__stock mb-20">
                                                    <span className="mr-10">Availability :</span>
                                                    <span>1795 in stock</span>
                                                </div>
                                                <div className="product__modal-form">
                                                    <form action="#">
                                                        <div className="pro-quan-area d-lg-flex align-items-center">
                                                            <div className="product-quantity mr-20 mb-25">
                                                                <div className="cart-plus-minus p-relative"><input
                                                                    type="text" defaultValue={1}/></div>
                                                            </div>
                                                            <div className="pro-cart-btn mb-25">
                                                                <button className="cart-btn" type="submit">Add to cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="product__stock mb-30">
                                                    <ul>
                                                        <li><a href="#">
                                                            <span className="sku mr-10">SKU:</span>
                                                            <span>Samsung C49J89: £875, Debenhams Plus</span></a>
                                                        </li>
                                                        <li><a href="#">
                                                            <span className="cat mr-10">Categories:</span>
                                                            <span>iPhone, Tablets</span></a>
                                                        </li>
                                                        <li><a href="#">
                                                            <span className="tag mr-10">Tags:</span>
                                                            <span>Smartphone, Tablets</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        );
    }
}

export default Categories;