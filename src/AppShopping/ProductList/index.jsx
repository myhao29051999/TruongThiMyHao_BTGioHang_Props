import React, { Component } from "react";
import Product from "../Product";

export default class ProductList extends Component {
  renderProductList = () => {
    const { handleSelected, productList, handleAddProduct } = this.props;
    return productList.map((product, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <Product
            handleSelected={handleSelected}
            product={product}
            handleAddProduct={handleAddProduct}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container danh-sach-san-pham">
        <div className="row">{this.renderProductList()}</div>
      </div>
    );
  }
}
