import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { useProduct } from "../../../context/ProductContext";
import { Products } from "../../../types/Product";

interface IProps {}

const Header: React.FC<IProps> = () => {
  const { visible, setProducts, deleteProduct } = useProduct();

  const massDelete = () => {
    setProducts((prevState) =>
      prevState.map((items: Products) => ({
        ...items,
        will_delete: true,
      }))
    );
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
        <h1 style={{ fontSize: 30 }}>Product List</h1>
        <div>
          <Link to={"/addproduct"}>
            <Button text="ADD" style={{ marginRight: 20 }} />
          </Link>
          {!visible ? (
            <Button id="delete-product-btn" text="MASS DELETE" onClick={massDelete} />
          ) : (
            <Button id="delete-product-btn" text="DELETE" onClick={() => deleteProduct()} />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
