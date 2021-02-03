import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";
import ProductSelected from "./ProductSelected";

export default class AppShopping extends Component {
  state = {
    productSelected: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    cardList: [],
  };
  productList = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  handleSelected = (productSelected) => {
    this.setState({
      //   productSelected: productSelected,
      productSelected,
    });
  };
  // Thêm giỏ hàng
  handleAddProduct = (productSelected) => {
    // console.log(productSelected);

    //B1: từ sp dc chọn tạo ra sp giỏ hàng
    let spGioHang = {
      maSP: productSelected.maSP,
      tenSP: productSelected.tenSP,
      hinhAnh: productSelected.hinhAnh,
      soLuong: 1,
      giaBan: productSelected.giaBan,
    };
    //Kiểm tra sp dc chọn có trong giỏ hàng chưa
    var gioHangCapNhat = [...this.state.cardList];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      //Sản phẩm dc click đã có trong this.state.cardList
      gioHangCapNhat[index].soLuong += 1;
    } else {
      //Sản phẩm dc click chưa có trong this.state.cardList
      gioHangCapNhat.push(spGioHang);
    }
    //setState để component render lại
    this.setState({
      cardList: gioHangCapNhat,
    });
  };

  //Xóa sản phẩm
  handleDeleteProduct = (maSP) => {
    //Tìm trong giỏ hàng có chứa maSP dc click thì xóa nó đi
    var gioHangCapNhat = [...this.state.cardList];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }
    //Cập nhật lại giỏ hàng và render lại giao diện
    this.setState({
      cardList: gioHangCapNhat,
    });
  };

  //Hàm tăng giảm số lượng
  //Nếu tangOrGiam = true: tăng số lượng. =false: giảm số lượng
  handleIncreaseOrDecreaseTotal = (maSP, tangOrGiam) => {
    var gioHangCapNhat = [...this.state.cardList];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (tangOrGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    //Cập nhật lại giá trị và render lại giỏ hàng
    this.setState({
      cardList: gioHangCapNhat,
    });
  };
  render() {
    //hàm tăng số lượng sản phẩm sau mỗi lần click vào btn Thêm vào giỏ hàng
    let total = this.state.cardList.reduce((sum, product, index) => {
      return (sum += product.soLuong);
    }, 0);
    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        <div className="container text-center my-2">
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({total})
          </button>
        </div>
        <ProductList
          handleSelected={this.handleSelected}
          productList={this.productList}
          handleAddProduct={this.handleAddProduct}
        />
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: 1000 }}
          >
            <Modal
              cardList={this.state.cardList}
              handleDeleteProduct={this.handleDeleteProduct}
              handleIncreaseOrDecreaseTotal={this.handleIncreaseOrDecreaseTotal}
            />
          </div>
        </div>
        <ProductSelected productSelected={this.state.productSelected} />
      </section>
    );
  }
}
