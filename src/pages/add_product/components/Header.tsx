import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { useProduct } from "../../../context/ProductContext";
import { Products } from "../../../types/Product";

interface IProps {
  newProduct: Partial<Products>;
  payload: {
    height: string;
    width: string;
    length: string;
    size: string;
    weight: string;
  };
}

const Header: React.FC<IProps> = ({ newProduct, payload }) => {
  const { addProduct } = useProduct();

  const validate = () => {
    if (
      newProduct.name?.length === 0 ||
      newProduct.price?.length === 0 ||
      newProduct.sku?.length === 0 ||
      newProduct.type?.length === 0
    ) {
      alert("Please enter all fields");
    } else if (newProduct.type === "FURNITURE") {
      if (
        payload.width.length === 0 ||
        payload.height.length === 0 ||
        payload.length.length === 0
      ) {
        alert("Please enter all fields for FURNITURE");
      } else {
        addProduct(newProduct, payload);
      }
    } else if (newProduct.type === "DVD") {
      if (payload.size.length === 0) {
        alert("Please enter all fields for DVD");
      } else {
        addProduct(newProduct, payload);
      }
    } else if (newProduct.type === "BOOK") {
      if (payload.weight.length === 0) {
        alert("Please enter all fields for BOOK");
      } else {
        addProduct(newProduct, payload);
      }
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "20px 0",
          borderBottomColor: "black",
          borderBottom: "3px solid black",
          marginBottom: 30,
        }}
      >
        <h1 style={{ fontSize: 30 }}>Product Add</h1>
        <div>
          <Button text="Save" onClick={validate} />
          <Link to={"/"}>
            <Button text="Cancel" style={{ marginLeft: 20 }} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
