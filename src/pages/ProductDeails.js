import React, {Component} from 'react';

class ProductDeails extends Component {
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
                <div className="product-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="product__details-nav d-sm-flex align-items-start">
                                    <ul className="nav nav-tabs flex-sm-column justify-content-between"
                                        id="productThumbTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="thumbOne-tab" data-bs-toggle="tab"
                                                    data-bs-target="#thumbOne" type="button" role="tab"
                                                    aria-controls="thumbOne" aria-selected="true">
                                                <img src={process.env.PUBLIC_URL + "/img/product/nav/product-nav-3.jpg"}
                                                     alt=""/>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="thumbTwo-tab" data-bs-toggle="tab"
                                                    data-bs-target="#thumbTwo" type="button" role="tab"
                                                    aria-controls="thumbTwo" aria-selected="false">
                                                <img src={process.env.PUBLIC_URL + "/img/product/nav/product-nav-3.jpg"}
                                                     alt=""/>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="thumbThree-tab" data-bs-toggle="tab"
                                                    data-bs-target="#thumbThree" type="button" role="tab"
                                                    aria-controls="thumbThree" aria-selected="false">
                                                <img src={process.env.PUBLIC_URL +"/img/product/nav/product-nav-3.jpg"} alt=""/>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="product__details-thumb">
                                        <div className="tab-content" id="productThumbContent">
                                            <div className="tab-pane fade show active" id="thumbOne" role="tabpanel"
                                                 aria-labelledby="thumbOne-tab">
                                                <div className="product__details-nav-thumb w-img">
                                                    <img
                                                        src={process.env.PUBLIC_URL + "/img/product/nav/product-nav-big-2.jpg"}
                                                        alt=""/>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="thumbTwo" role="tabpanel"
                                                 aria-labelledby="thumbTwo-tab">
                                                <div className="product__details-nav-thumb w-img">
                                                    <img
                                                        src={process.env.PUBLIC_URL + "/img/product/nav/product-nav-big-2.jpg"}
                                                        alt=""/>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="thumbThree" role="tabpanel"
                                                 aria-labelledby="thumbThree-tab">
                                                <div className="product__details-nav-thumb w-img">
                                                    <img src={process.env.PUBLIC_URL +"/img/product/nav/product-nav-big-2.jpg"} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="product__details-content">
                                    <h6>Samsung Galaxy A12, 32GB, Black – (Locked)</h6>
                                    <div className="pd-rating mb-10">
                                        <ul className="rating">
                                            <li><a href="#"><i className="fal fa-star"/></a></li>
                                            <li><a href="#"><i className="fal fa-star"/></a></li>
                                            <li><a href="#"><i className="fal fa-star"/></a></li>
                                            <li><a href="#"><i className="fal fa-star"/></a></li>
                                            <li><a href="#"><i className="fal fa-star"/></a></li>
                                        </ul>
                                        <span>(01 review)</span>
                                        <span><a href="#">Add your review</a></span>
                                    </div>
                                    <div className="price mb-10">
                                        <span>$216.00</span>
                                    </div>
                                    <div className="features-des mb-20 mt-10">
                                        <ul>
                                            <li><a href="product-details.html"><i className="fas fa-circle"/> Bass and
                                                Stereo Sound.</a></li>
                                            <li><a href="product-details.html"><i className="fas fa-circle"/> Display
                                                with 3088 x 1440 pixels resolution.</a></li>
                                            <li><a href="product-details.html"><i className="fas fa-circle"/> Memory,
                                                Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                            <li><a href="product-details.html"><i className="fas fa-circle"/> Androi
                                                v10.0 Operating system.</a></li>
                                        </ul>
                                    </div>
                                    <div className="product-stock mb-20">
                                        <h5>Availability: <span> 940 in stock</span></h5>
                                    </div>
                                    <div className="cart-option mb-15">
                                        <div className="product-quantity mr-20">
                                            <div className="cart-plus-minus p-relative"><input type="text"
                                                                                               defaultValue={1}/>
                                                <div className="dec qtybutton">-</div>
                                                <div className="inc qtybutton">+</div>
                                            </div>
                                        </div>
                                        <a href="cart.html" className="cart-btn">Add to Cart</a>
                                    </div>
                                    <div className="details-meta">
                                        <div className="d-meta-left">
                                            <div className="dm-item mr-20">
                                                <a href="#"><i className="fal fa-heart"/>Add to wishlist</a>
                                            </div>
                                            <div className="dm-item">
                                                <a href="#"><i className="fal fa-layer-group"/>Compare</a>
                                            </div>
                                        </div>
                                        <div className="d-meta-left">
                                            <div className="dm-item">
                                                <a href="#"><i className="fal fa-share-alt"/>Share</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-tag-area mt-15">
                                        <div className="product_info">
                <span className="sku_wrapper">
                  <span className="title">SKU:</span>
                  <span className="sku">DK1002</span>
                </span>
                                            <span className="posted_in">
                  <span className="title">Categories:</span>
                  <a href="#">iPhone</a>
                  <a href="#">Tablets</a>
                </span>
                                            <span className="tagged_as">
                  <span className="title">Tags:</span>
                  <a href="#">Smartphone</a>,
                  <a href="#">Tablets</a>
                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-details-des mt-40 mb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="product__details-des-tab">
                                    <ul className="nav nav-tabs" id="productDesTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="des-tab" data-bs-toggle="tab"
                                                    data-bs-target="#des" type="button" role="tab" aria-controls="des"
                                                    aria-selected="true">Description
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="aditional-tab" data-bs-toggle="tab"
                                                    data-bs-target="#aditional" type="button" role="tab"
                                                    aria-controls="aditional" aria-selected="false">Additional
                                                information
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="review-tab" data-bs-toggle="tab"
                                                    data-bs-target="#review" type="button" role="tab"
                                                    aria-controls="review" aria-selected="false">Reviews (1)
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="prodductDesTaContent">
                            <div className="tab-pane fade active show" id="des" role="tabpanel"
                                 aria-labelledby="des-tab">
                                <div className="product__details-des-wrapper">
                                    <p className="des-text mb-35">Designed by Hans J. Wegner in 1949 as one of the first
                                        models created especially for Carl Hansen &amp; Son, and produced since 1950.
                                        The last of a series of chairs wegner designed based on inspiration from antique
                                        Chinese armchairs. The gently rounded top together with the back and seat offers
                                        a variety of comfortable seating positions,ideal for both long visits to the
                                        dining table and relaxed lounging.</p>
                                    <h6 className="des-sm-title">The standard passage, used since the 1500s.</h6>
                                    <p className="des-text mb-35">A light chair, easy to move around the dining table
                                        and about the room. Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse
                                        ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.</p>
                                    <div className="features-des-image text-center">
                                        <img
                                            src={process.env.PUBLIC_URL + "/img/features-product/product-content-6.png"}
                                            alt=""/>
                                    </div>
                                    <div className="product-des-section mb-90">
                                    <h5 className="des-section mb-30">Get 30% Daily Cash
                                            <br/> Back with Membership Card.</h5>
                                        <p>A new collection of lounge furniture, occasional tables and a stool by Edward
                                            Barber &amp; Jay Osgerby offers a relaxed, contemporary attitude toward
                                            interior design. The lounge furniture includes four individualized sized
                                            sofas, and three complementary ottomans. Available in a range of upholstery
                                            fabrics and leathers, the lounge furniture is distinguished by stitched
                                            seams that reinforce its architectural profile, softened by the curvature of
                                            cushions on each face range of upholstery fabrics and leathers.</p>
                                    </div>
                                    <div className="row mb-80">
                                        <div className="col-xl-6">
                                            <div className="des-single mb-30 text-center">
                                                <div className="features-des-image text-center">
                                                    <img
                                                        src={process.env.PUBLIC_URL + "/img/features-product/product-content-6.png"}
                                                        alt=""/>
                                                </div>
                                                <h5 className="des-section">Get 30% Daily Cash
                                                    <br/> Back with Membership Card.</h5>
                                                <p>Sit amet conse ctetur adipisicing elit, sed do <br/> eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="des-single text-center mb-30">
                                                <div className="features-des-image">
                                                    <img
                                                        src={process.env.PUBLIC_URL + "/img/features-product/product-content-6.png"}
                                                        alt=""/>
                                                </div>
                                                <h5 className="des-section text-center">Get 70% Daily Cash
                                                    <br/> Back with Membership Card.</h5>
                                                <p>Sit amet conse ctetur adipisicing elit, sed do <br/> eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features-des-image features-des-image-2 text-center mb-50 w-img">
                                        <img
                                            src={process.env.PUBLIC_URL + "/img/features-product/product-content-6.png"}
                                            alt=""/>
                                    </div>
                                    <div className="des-sm-features">
                                    <div className="des-sm-fet text-center mb-30">
                                            <img
                                                src={process.env.PUBLIC_URL + "/img/features-product/product-content-6.png"}
                                                alt=""/>
                                            <span>Ultra Wide Angle</span>
                                        </div>
                                        <div className="des-sm-fet text-center mb-30">
                                        <img src={process.env.PUBLIC_URL +"/img/features-product/product-content-6.png"} alt=""/>
                                            <span>Live Focus On</span>
                                        </div>
                                    </div>
                                    <p className="des-text mb-35">Designed by Puik in 1949 as one of the first models
                                        created especially for Carl Hansen &amp; Son, and produced since 1950. The last
                                        of a series of chairs wegner designed based on inspiration from antique Chinese
                                        armchairs. The gently rounded top together with the back and seat offers a
                                        variety of comfortable seating positions,ideal for both long visits to the
                                        dining table and relaxed lounging. A light chair easy to move around the dining
                                        table and about the room. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla.</p>
                                    <h6 className="des-sm-title">Section 1.10.32 of "de Finibus Bonorum et Malorum",
                                        written by Cicero in 45 BC.</h6>
                                    <p className="des-text mb-25">Sound of Marshall, unplugs the chords, and takes the
                                        show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece
                                        of vintage styled engineering. Setting the bar as one of the loudest speakers in
                                        its class, the Kilburn is a compact, stout-hearted hero with a well-balanced
                                        audio which boasts a clear midrange and extended highs for a sound that is both
                                        articulate and pronounced. The analogue knobs allow you to fine tune the
                                        controls to your personal preferences while the guitar-influenced leather strap
                                        enables easy and stylish travel.</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="aditional" role="tabpanel"
                                 aria-labelledby="aditional-tab">
                                <div className="product__desc-info">
                                    <ul>
                                        <li>
                                            <h6>Weight</h6>
                                            <span>2 lbs</span>
                                        </li>
                                        <li>
                                            <h6>Dimensions</h6>
                                            <span>12 × 16 × 19 in</span>
                                        </li>
                                        <li>
                                            <h6>Product</h6>
                                            <span>Purchase this product on rag-bone.com</span>
                                        </li>
                                        <li>
                                            <h6>Color</h6>
                                            <span>Gray, Black</span>
                                        </li>
                                        <li>
                                            <h6>Size</h6>
                                            <span>S, M, L, XL</span>
                                        </li>
                                        <li>
                                            <h6>Model</h6>
                                            <span>Model	</span>
                                        </li>
                                        <li>
                                            <h6>Shipping</h6>
                                            <span>Standard shipping: $5,95</span>
                                        </li>
                                        <li>
                                            <h6>Care Info</h6>
                                            <span>Machine Wash up to 40ºC/86ºF Gentle Cycle</span>
                                        </li>
                                        <li>
                                            <h6>Brand</h6>
                                            <span>Kazen</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                <div className="product__details-review">
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="review-rate">
                                                <h5>5.00</h5>
                                                <div className="review-star">
                                                    <a href="#"><i className="fas fa-star"/></a>
                                                    <a href="#"><i className="fas fa-star"/></a>
                                                    <a href="#"><i className="fas fa-star"/></a>
                                                    <a href="#"><i className="fas fa-star"/></a>
                                                    <a href="#"><i className="fas fa-star"/></a>
                                                </div>
                                                <span className="review-count">01 Review</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-8">
                                            <div className="review-des-infod">
                                                <h6>1 review for "<span>Wireless Bluetooth Over-Ear Headphones</span>"
                                                </h6>
                                                <div className="review-details-des">
                                                    <div className="author-image mr-15">
                                                        <a href="#"><img src={process.env.PUBLIC_URL +"/img/author/author-sm-1.jpeg"}
                                                                         alt=""/></a>
                                                    </div>
                                                    <div className="review-details-content">
                                                        <div className="str-info">
                                                            <div className="review-star mr-15">
                                                                <a href="#"><i className="fas fa-star"/></a>
                                                                <a href="#"><i className="fas fa-star"/></a>
                                                                <a href="#"><i className="fas fa-star"/></a>
                                                                <a href="#"><i className="fas fa-star"/></a>
                                                                <a href="#"><i className="fas fa-star"/></a>
                                                            </div>
                                                            <div className="add-review-option">
                                                                <a href="#">Add Review</a>
                                                            </div>
                                                        </div>
                                                        <div className="name-date mb-30">
                                                            <h6> admin – <span> May 27, 2021</span></h6>
                                                        </div>
                                                        <p>A light chair, easy to move around the dining table and about
                                                            the room. Duis aute irure dolor in reprehenderit
                                                            in <br/> voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="product__details-comment ">
                                                <div className="comment-title mb-20">
                                                    <h3>Add a review</h3>
                                                    <p>Your email address will not be published. Required fields are
                                                        marked *</p>
                                                </div>
                                                <div className="comment-rating mb-20">
                                                    <span>Overall ratings</span>
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"/></a></li>
                                                        <li><a href="#"><i className="fas fa-star"/></a></li>
                                                        <li><a href="#"><i className="fas fa-star"/></a></li>
                                                        <li><a href="#"><i className="fas fa-star"/></a></li>
                                                        <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    </ul>
                                                </div>
                                                <div className="comment-input-box">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-xxl-6 col-xl-6">
                                                                <div className="comment-input">
                                                                    <input type="text" placeholder="Your Name"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-6 col-xl-6">
                                                                <div className="comment-input">
                                                                    <input type="email" placeholder="Your Email"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <textarea placeholder="Your review"
                                                                          className="comment-input comment-textarea"
                                                                          defaultValue={""}/>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div
                                                                    className="comment-agree d-flex align-items-center mb-25">
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" defaultValue
                                                                               id="flexCheckDefault"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="flexCheckDefault">
                                                                            Save my name, email, and website in this
                                                                            browser for the next time I comment.
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="comment-submit">
                                                                    <button type="submit" className="cart-btn">Submit
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
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
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-view-4.jpg"}
                                                                alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav2" role="tabpanel"
                                                         aria-labelledby="nav2-tab">
                                                        <div className="product__modal-img w-img">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-view-4.jpg"}
                                                                alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav3" role="tabpanel"
                                                         aria-labelledby="nav3-tab">
                                                        <div className="product__modal-img w-img">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-view-4.jpg"}
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
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-nav-4.jpg"}
                                                                alt=""/>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="nav2-tab" data-bs-toggle="tab"
                                                                data-bs-target="#nav2" type="button" role="tab"
                                                                aria-controls="nav2" aria-selected="false">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-nav-4.jpg"}
                                                                alt=""/>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="nav3-tab" data-bs-toggle="tab"
                                                                data-bs-target="#nav3" type="button" role="tab"
                                                                aria-controls="nav3" aria-selected="false">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/quick-view/quick-nav-4.jpg"}
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

export default ProductDeails;