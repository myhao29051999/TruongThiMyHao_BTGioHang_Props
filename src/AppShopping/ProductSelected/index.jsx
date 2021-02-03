import React, { Component } from "react";

export default class ProductSelected extends Component {
  render() {
    const { productSelected } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5">
          <img
            style={{ height: "400px" }}
            className="img-fluid"
            src={productSelected.hinhAnh}
            alt
          />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{productSelected.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{productSelected.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{productSelected.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{productSelected.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{productSelected.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{productSelected.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
