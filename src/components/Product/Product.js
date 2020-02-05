import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }
    showHot(hot) {
        if(hot === true) {
            return <p className="hot">Hot</p>;
        }
    }
    formatCurrency(price, separate = "."){
        var s = price.toString();
        var regex = /\B(?=(\d{3})+(?!\d))/g;
        var ret = s.replace(regex, separate);
        return ret;
    }
    showInfo() {
        alert(this.props.children);
    }
    buttonEdit() {
        this.setState({
            editing: true
        });
    }
    buttonSave() {
        this.setState({editing: false});
        this.props.edit(this.props.index, this.txtName.value);
    }
    buttonDelete() {
        this.props.delete(this.props.index);
    }
    renderNomal () {
        return <div className="col-md-12 product-info">
                    <div className="form-group">
                        <button className="btn btn-info" onClick={() => this.buttonEdit()}>Edit</button>
                        <button className="btn btn-danger" onClick={() => this.buttonDelete()}>Remove</button>
                    </div>
                </div>
    }
    renderForm () {
        return <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" defaultValue={this.props.children} ref={(input) => {this.txtName = input}}></input>
                        <input type="text" className="form-control" defaultValue={this.props.price} ref={(input) => {this.txtPrice = input}}></input>
                        <button className="btn btn-primary" onClick={() => this.buttonSave()}>Save</button>
                    </div>
                </div>
    }
    showButtonEdit() {
        if(this.state.editing === false) {
            return this.renderNomal()
        } else {
            return this.renderForm()
        }
    }
    render() {
        return (
            <div className="col-sm-4 col-md-4">
                <img src={this.props.image} alt="" className="img-responsive" />
                <p className="name-product">{this.props.children}</p>
                <p className="price">$ {this.formatCurrency(this.props.price)}</p>
                {this.showHot(this.props.hot)}
                <p><a className="btn btn-danger">Add Cart</a></p>
                <p><a className="btn btn-default" onClick={() => this.showInfo()}>More info</a></p>
                {this.showButtonEdit()}
            </div>
        );
    }
}

export default Product;