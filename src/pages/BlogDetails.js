import React, {Component} from 'react';

class BlogDetails extends Component {
    render() {
        return (
            <main>
                <div className="page-banner-area page-banner-height-2"
                     data-background="assets/img/banner/page-banner-4.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page-banner-content text-center">
                                    <h4 className="breadcrumb-title">Blog Details</h4>
                                    <div className="breadcrumb-two">
                                        <nav>
                                            <nav className="breadcrumb-trail breadcrumbs">
                                                <ul className="breadcrumb-menu">
                                                    <li className="breadcrumb-trail">
                                                        <a href="index.html"><span>Home</span></a>
                                                    </li>
                                                    <li className="trail-item">
                                                        <span>Blog Details</span>
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
                <div className="news-detalis-area mt-120 mb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                                <div className="news-detalis-content mb-50">
                                    <ul className="blog-meta mb-20">
                                        <li><a href="blog-details.html"><i className="fal fa-eye"/>100 Views</a></li>
                                        <li><a href="blog-details.html"><i className="fal fa-comments"/> 30 Comments</a>
                                        </li>
                                        <li><a href="blog-details.html"><i className="fal fa-calendar-alt"/> 24th March
                                            2021</a></li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                                        omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explic abo. Nemo enim ipsam voluptatem quia voluptas sit
                                        aspernatur aut odit aut fugit, sed quia consequuntur mag ni dolores eos qui
                                        ratione voluptatem sequi nesciunt.</p>
                                    <div className="news-thumb mt-40">
                                        <img src={process.env.PUBLIC_URL +"/img/blog/blog-thumb.jpg"} alt="blog" className="img-fluid"/>
                                    </div>
                                    <h4 className="news-title mt-60">Do you know how to wear headphones properly?</h4>
                                    <p className="mt-25 mb-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consect
                                        etur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                    <h4 className="news-title news-title-2 pt-55">Laptops Become More Common in Everyday
                                        Life</h4>
                                    <div className="blog-inner mt-30">
                                        <img src={process.env.PUBLIC_URL +"/img/blog/incen.jpg"} alt="" className="img-fluid"/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate Lorem ipsum
                                            dolor sit amet, co nsectetur adipisicing elit, sed do eiusmod</p>
                                    </div>
                                    <div className="news-quote-area mt-55 text-center">
                                        <i className="fas fa-quote-left"/>
                                        <h5 className="news-quote-title mt-25">Choices to take a holiday and travelling
                                            out in this pandemic situation are limited. Why not take a staycation.</h5>
                                        <h6 className="founder-name mt-25">Rosalina D. William</h6>
                                        <span className="founder-title">Founder</span>
                                    </div>
                                    <p className="mt-55">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                                        perspiciatis unde omnis iste natus error sit voluptatem. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore.</p>
                                    <div
                                        className="news-info d-sm-flex align-items-center justify-content-between mt-50 mb-50">
                                        <div className="news-tag">
                                            <h6 className="tag-title mb-25">Releted Tags</h6>
                                            <a href="#"> Popular</a>
                                            <a href="#">Desgin</a>
                                            <a href="#">UX</a>
                                        </div>
                                        <div className="news-share">
                                            <h6 className="tag-title mb-25">Social Share</h6>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                            <a href="#"><i className="fab fa-typo3"/></a>
                                            <a href="#"><i className="fab fa-tumblr"/></a>
                                            <a href="#"><i className="fal fa-share-alt"/></a>
                                        </div>
                                    </div>
                                    <div className="news-navigation pt-50 pb-40">
                                        <div className="changes-info">
                                            <span><a href="blog-details.html">Prev Post</a></span>
                                            <h6 className="changes-info-title"><a href="blog-details.html">Tips On
                                                Minimalist</a></h6>
                                        </div>
                                        <div className="changes-info text-md-right">
                                            <span><a href="blog-details.html">Next Post</a></span>
                                            <h6 className="changes-info-title"><a href="blog-details.html">Less Is
                                                More</a></h6>
                                        </div>
                                    </div>
                                    <div className="news-author mt-60">
                                        <img src={process.env.PUBLIC_URL +"/img/blog/news-author.jpg"} alt="" className="img-fluid"/>
                                        <div className="news-author-info">
                                            <span>Written by</span>
                                            <h6 className="author-title">Rosalina D. William</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation is enougn for today. quis nostrud
                                                exercitation is enougn for.</p>
                                        </div>
                                    </div>
                                    <div className="post-comments mt-60">
                                        <h6 className="post-comment-title mb-40">03 Comments</h6>
                                        <div className="latest-comments">
                                            <ul>
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/blog/p-author-3.jpg"}
                                                                alt=""/>
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar">
                                                                <h6 className="avatar-name">Rosalina Kelian</h6>
                                                                <a href="#" className="comment-reply"><i
                                                                    className="fal fa-share"/>Reply</a>
                                                            </div>
                                                            <span className="post-meta"><i
                                                                className="fal fa-calendar-alt"/> October 26, 2020</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed do eiusmod tempor incididunt ut labore et dolore
                                                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                                commodo consequat.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="children">
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img
                                                                src={process.env.PUBLIC_URL + "/img/blog/p-author-3.jpg"}
                                                                alt=""/>
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar">
                                                                <h6 className="avatar-name">Iqbal Hossain</h6>
                                                                <a href="#" className="comment-reply"><i
                                                                    className="fal fa-share"/>Reply</a>
                                                            </div>
                                                            <span className="post-meta"><i
                                                                className="fal fa-calendar-alt"/> October 26, 2020</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed do eiusmod tempor incid idunt ut labore et dolore
                                                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                                exercitation ullamco..</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src={process.env.PUBLIC_URL +"/img/blog/p-author-3.jpg"} alt=""/>
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar">
                                                                <h6 className="avatar-name">Arista Williamson</h6>
                                                                <a href="#" className="comment-reply"><i
                                                                    className="fal fa-share"/>Reply</a>
                                                            </div>
                                                            <span className="post-meta"><i
                                                                className="fal fa-calendar-alt"/> October 26, 2020</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed do eiusmod tempor incididunt ut labore et dolo re
                                                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                                commodo consequat.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post-comment-form mt-20">
                                        <h4 className="post-comment-form-title mb-40">Post Comment</h4>
                                        <form action="#">
                                            <div className="input-field">
                                                <i className="fal fa-pencil-alt"/>
                                                <textarea name="comment" id="comment"
                                                          placeholder="Type your comments...." defaultValue={""}/>
                                            </div>
                                            <div className="input-field">
                                                <i className="fal fa-user"/>
                                                <input type="text" placeholder="Type your name...."/>
                                            </div>
                                            <div className="input-field">
                                                <i className="fal fa-envelope"/>
                                                <input type="text" placeholder="Type your email...."/>
                                            </div>
                                            <div className="input-field">
                                                <i className="fal fa-globe"/>
                                                <input type="text" placeholder="Type your website...."/>
                                            </div>
                                            <button className="post-comment shutter-btn"><i
                                                className="fal fa-comments"/>Post
                                                Comment
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="news-sidebar pl-10">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="widget">
                                                <h6 className="sidebar-title"> Search Here</h6>
                                                <div className="n-sidebar-search">
                                                    <input type="text" placeholder="Search your keyword..."/>
                                                    <a href="#"><i className="fal fa-search"/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="widget">
                                                <h6 className="sidebar-title">Popular Feeds</h6>
                                                <div className="n-sidebar-feed">
                                                    <ul>
                                                        <li>
                                                            <div className="feed-number">
                                                                <a href="blog-details.html"><img
                                                                    src={process.env.PUBLIC_URL +"/img/blog//sm-b-4.jpg"} alt=""/></a>
                                                            </div>
                                                            <div className="feed-content">
                                                                <h6><a href="blog-details.html">APL Logistics seeks to
                                                                    be a premier, profitable</a></h6>
                                                                <span className="feed-date">
                            <i className="fal fa-calendar-alt"/> 24th March 2021
                          </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="feed-number">
                                                                <a href="blog-details.html"><img
                                                                    src={process.env.PUBLIC_URL +"/img/blog//sm-b-4.jpg"} alt=""/></a>
                                                            </div>
                                                            <div className="feed-content">
                                                                <h6><a href="blog-details.html">Of global supply-chain
                                                                    services to help</a></h6>
                                                                <span className="feed-date">
                            <i className="fal fa-calendar-alt"/> 24th March 2021
                          </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="feed-number">
                                                                <a href="blog-details.html"><img
                                                                    src={process.env.PUBLIC_URL +"/img/blog//sm-b-4.jpg"} alt=""/></a>
                                                            </div>
                                                            <div className="feed-content">
                                                                <h6><a href="blog-details.html">Enable sustainable trade
                                                                    and commerce</a></h6>
                                                                <span className="feed-date">
                            <i className="fal fa-calendar-alt"/> 24th March 2021
                          </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="feed-number">
                                                                <a href="blog-details.html"><img
                                                                    src={process.env.PUBLIC_URL +"/img/blog//sm-b-4.jpg"} alt=""/></a>
                                                            </div>
                                                            <div className="feed-content">
                                                                <h6><a href="blog-details.html">In key
                                                                    markets &amp; region We will accomplish</a>
                                                                </h6>
                                                                <span className="feed-date">
                            <i className="fal fa-calendar-alt"/> 24th March 2021
                          </span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="widget">
                                                <h6 className="sidebar-title">Categories</h6>
                                                <ul className="n-sidebar-categories">
                                                    <li>
                                                        <a href="blog-details.html">
                                                            <div className="single-category p-relative mb-10">
                                                                Business
                                                                <span className="category-number">26</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">
                                                            <div className="single-category p-relative mb-10">
                                                                consultant
                                                                <span className="category-number">30</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">
                                                            <div className="single-category p-relative mb-10">
                                                                Creative
                                                                <span className="category-number">71</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">
                                                            <div className="single-category p-relative mb-10">
                                                                UI/UX
                                                                <span className="category-number">56</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">
                                                            <div className="single-category p-relative">
                                                                Texhnology
                                                                <span className="category-number">60</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="widget">
                                                <h6 className="sidebar-title">Instagram Feeds</h6>
                                                <div className="dktags">
                                                    <a className="single-tag" href="#">Popular</a>
                                                    <a className="single-tag" href="#">Design</a>
                                                    <a className="single-tag" href="#">Usability</a>
                                                    <a className="single-tag" href="#">Icon</a>
                                                    <a className="single-tag" href="#">Kit</a>
                                                    <a className="single-tag" href="#">Business</a>
                                                    <a className="single-tag" href="#">Keypad</a>
                                                    <a className="single-tag" href="#">Tech</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="widget sponsor">
                                                <h6 className="sidebar-title">Sponsor Adds</h6>
                                                <div className="sponsor-img">
                                                    <img src={process.env.PUBLIC_URL +"/img/blog/sponsor-3.jpg"} alt=""
                                                         className="img-fluid"/>
                                                    <div className="ad-width">270x240</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default BlogDetails;