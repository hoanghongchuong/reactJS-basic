import React, { Component } from 'react';

class ListProduct extends Component {
    render() {
        return (
            <div className="box-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sort-by">
                                <span>Sort by</span>
                                <select>
                                <option value>Chọn giá</option>
                                <option value>Giá từ thấp đến cao</option>
                                <option value>Giá từ cao xuống thấp</option>                        
                                </select>
                            </div>
                        </div>
                        <div className="content-category">
                            <div className="col-md-3">
                                <div className="box-category">
                                <h4>Categories</h4>
                                <p>New collection</p>
                                <p>Dress</p>
                                <p>Sweatshirts</p>
                                <p>Jeans</p>
                                <p>Short</p>
                                <p>Jacket</p>
                                <p>T-Shirt</p>
                                <p>Sale</p>
                                </div>
                                <div className="box-category mt-30">
                                <h4>color</h4>
                                <ul>
                                    <li className="m1" />
                                    <li className="m2" />
                                    <li className="m3" />
                                    <li className="m4" />
                                    <li className="m5" />
                                </ul>
                                </div>
                                <div className="box-category size mt-30">
                                <h4>Size</h4>
                                <span>XS</span>
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                                <span>2XL</span>
                                <span>3XL</span>
                                </div>
                                <div className="box-category mt-30">
                                <h4>Price</h4>
                                <p><img src="images/range.png" alt="" /></p>
                                <p className="range-price tac">60$ - 570$</p>
                                </div>
                            </div>
                            <div className="col-md-9 pdr-0">
                            <div className="box-product">
                            <div className="col-sm-4 col-md-4">
                                <img src="images/woman1.png" alt="" />
                                <p className="name-product">Print Dress</p>
                                <p className="price">$35,90</p>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <img src="images/woman2.png" alt="" />
                                <p className="name-product">Velvet Mini dress</p>
                                <p className="price">$35,90</p>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <img src="images/woman3.png" alt="" />
                                <p className="name-product">Short Fringed dress</p>
                                <p className="price">$35,90</p>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <img src="images/woman4.png" alt="" />
                                <p className="name-product">Stan Effect Dress</p>
                                <p className="price">$35,90</p>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <img src="images/woman5.png" alt="" />
                                <p className="name-product">Mini Slip Dress</p>
                                <p className="price">$35,90</p>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <img src="images/woman6.png" alt="" />
                                <p className="name-product">Ruffled dress</p>
                                <p className="price">$35,90</p>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <img src="images/woman7.png" alt="" />
                                <p className="name-product">Sequin Dress</p>
                                <p className="price">$120</p>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <img src="images/woman8.png" alt="" />
                                <p className="name-product">Ruched Slip dress</p>
                                <p className="price">$170</p>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <img src="images/woman9.png" alt="" />
                                <p className="name-product">Dress with belt</p>
                                <p className="price">$470</p>
                            </div>
                            </div>
                            <div className="load-more tac"><a>Load more</a></div>
                        </div>
                        </div>
                    </div>
                        <div className="row">
                            <div className="related">
                                <p className="p1">Related searches</p>
                                <p>"Sweatshirt"</p>
                            </div>
                            <div className="box-related">
                                <p className="pull-right view-more">View more <i className="fa fa-arrow-right" /></p>
                                <div className="box-product-related mt-30">
                                    <div className="col-sm-4 col-md-3">
                                        <img src="images/related1.png" alt="" />
                                    </div>
                                    <div className="col-sm-4 col-md-3">
                                        <img src="images/relate2.png" alt="" />
                                    </div>
                                    <div className="col-sm-4 col-md-3">
                                        <img src="images/related3.png" alt="" />
                                    </div>
                                    <div className="col-sm-4 col-md-3">
                                        <img src="images/relate4.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default ListProduct;