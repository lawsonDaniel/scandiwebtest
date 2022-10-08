import React from "react";
import { Products } from "../../../types/Product";

interface IProps {
  item: Products;
  updateWillDelete: (item: Products) => void;
}

const ProductCard: React.FC<IProps> = ({ item, updateWillDelete }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        padding: "20px 10px",
        position: "relative",
      }}
    >
      <input
        type="checkbox"
        checked={item.will_delete}
        onChange={() => {
          updateWillDelete(item);
        }}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          cursor: "pointer",
        }}
      />
      <div>
        <p style={{ fontSize: 18, textAlign: "center" }}>{item.name}</p>
        <p style={{ fontSize: 18, textAlign: "center", marginTop: 5 }}>
          {item.sku}
        </p>
        <p style={{ fontSize: 18, textAlign: "center", marginTop: 5 }}>
          {item.price} $
        </p>
        {item.type === "FURNITURE" ? (
          <p
            style={{ fontSize: 18, textAlign: "center", marginTop: 5 }}
          >{`Dimensions: ${item.payload.width}x${item.payload.height}x${item.payload.length}`}</p>
        ) : item.type === "BOOK" ? (
          <p
            style={{ fontSize: 18, textAlign: "center", marginTop: 5 }}
          >{`Weight: ${item.payload.weight}`}</p>
        ) : (
          <p
            style={{ fontSize: 18, textAlign: "center", marginTop: 5 }}
          >{`Size: ${item.payload.size}`}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
