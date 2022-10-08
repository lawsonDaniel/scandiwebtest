import React from "react";
import { useProduct } from "../../context/ProductContext";
import { Products } from "../../types/Product";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from "react-loader-spinner";

interface IProps {}

const Product: React.FC<IProps> = () => {
  const { products, updateWillDelete, isLoading } = useProduct();

  return (
    <>
      <Header />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Circles color="#dc1c2c" height={50} width={100} />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            justifyContent: "center",
          }}
        >
          {products.map((item: Products) => (
            <ProductCard
              updateWillDelete={updateWillDelete}
              item={item}
              key={item.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
