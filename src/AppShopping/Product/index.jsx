import React, { Component } from "react";

export default class Product extends Component {
  handleClickDetails = () => {
    // console.log("Click...");
    const { product, handleSelected } = this.props;
    handleSelected(product);
  };
  render() {
    const { product, handleAddProduct } = this.props;
    return (
      <div className="card">
        <img
          style={{ height: "320px" }}
          className="card-img-top"
          src={product.hinhAnh}
          alt
        />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <button onClick={this.handleClickDetails} className="btn btn-success">
            Chi tiết
          </button>
          <button
            onClick={() => {
              handleAddProduct(product);
            }}
            className="btn btn-danger"
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
