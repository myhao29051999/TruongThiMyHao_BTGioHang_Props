import React, { Component } from "react";

export default class Modal extends Component {
  renderCardList = () => {
    const {
      cardList,
      handleDeleteProduct,
      handleIncreaseOrDecreaseTotal,
    } = this.props;
    return cardList.map((pro, index) => {
      return (
        <tr className="card-item" key={index}>
          <td>{pro.maSP}</td>
          <td>{pro.tenSP}</td>
          <td>
            <img src={pro.hinhAnh} width={50} alt />
          </td>
          <td>
            <button
              onClick={() => handleIncreaseOrDecreaseTotal(pro.maSP, false)}
            >
              -
            </button>
            {pro.soLuong}
            <button
              onClick={() => handleIncreaseOrDecreaseTotal(pro.maSP, true)}
            >
              +
            </button>
          </td>
          <td>{pro.giaBan.toLocaleString()}</td>
          <td>{(pro.soLuong * pro.giaBan).toLocaleString()}</td>
          <td>
            <button
              onClick={() => handleDeleteProduct(pro.maSP)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    const { cardList } = this.props;
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Giỏ hàng</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <table className="table">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.renderCardList()}</tbody>
            <tfoot>
              <tr>
                <td colSpan="5"></td>
                <td>Tổng tiền</td>
                <td>
                  {cardList
                    .reduce((tongTien, spGH, index) => {
                      return (tongTien += spGH.soLuong * spGH.giaBan);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    );
  }
}
