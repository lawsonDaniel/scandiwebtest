import { useState } from "react";
import { Products } from "../../types/Product";
import Header from "./components/Header";

function AddProduct() {
  const [payload, setPayload] = useState<{
    height: string;
    width: string;
    length: string;
    size: string;
    weight: string;
  }>({
    height: "",
    width: "",
    length: "",
    size: "",
    weight: "",
  });
  const [newProduct, setNewProduct] = useState<Partial<Products>>({
    name: "",
    price: "",
    sku: "",
    type: "FURNITURE",
  });

  return (
    <>
      <Header newProduct={newProduct} payload={payload} />
      <form id="product_form">
        <div style={{ marginBottom: 10 }}>
          <p style={{ paddingBottom: 10 }}>SKU</p>
          <input
          id="sku"
            style={{
              padding: "7px 10px",
              borderRadius: 4,
              border: "1px solid black",
              width: 300,
            }}
            value={newProduct.sku}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, sku: e.target.value }))
            }
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <p style={{ paddingBottom: 10 }}>Name</p>
          <input
          id="name"
            style={{
              padding: "7px 10px",
              borderRadius: 4,
              border: "1px solid black",
              width: 300,
            }}
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <p style={{ paddingBottom: 10 }}>Price ($)</p>
          <input
          id="price"
            style={{
              padding: "7px 10px",
              borderRadius: 4,
              border: "1px solid black",
              width: 300,
            }}
            value={newProduct.price}
            type="number"
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, price: e.target.value }))
            }
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <p style={{ paddingBottom: 10 }}>Type Switcher</p>
          <select
          id="productType"
            style={{
              padding: "7px 10px",
              borderRadius: 4,
              border: "1px solid black",
              width: 320,
              fontSize: 15,
            }}
            value={newProduct.type}
            onChange={(e) => {
              setNewProduct((prev) => ({
                ...prev,
                type:
                  e.target.value === "FURNITURE"
                    ? "FURNITURE"
                    : e.target.value === "DVD"
                    ? "DVD"
                    : "BOOK",
              }));
            }}
          >
            <option value={"FURNITURE"}>Furniture</option>
            <option value={"DVD"}>DVD</option>
            <option value={"BOOK"}>Book</option>
          </select>
        </div>
        {newProduct.type === "FURNITURE" ? (
          <>
            <div style={{ marginBottom: 10 }}>
              <p style={{ paddingBottom: 10 }}>Height (CM)</p>
              <input
              id="height"
                style={{
                  padding: "7px 10px",
                  borderRadius: 4,
                  border: "1px solid black",
                  width: 300,
                }}
                value={payload.height}
                type="number"
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, height: e.target.value }))
                }
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <p style={{ paddingBottom: 10 }}>Width (CM)</p>
              <input
              id="width"
                style={{
                  padding: "7px 10px",
                  borderRadius: 4,
                  border: "1px solid black",
                  width: 300,
                }}
                value={payload.width}
                type="number"
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, width: e.target.value }))
                }
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <p style={{ paddingBottom: 10 }}>Length (CM)</p>
              <input
              id="lenght"
                style={{
                  padding: "7px 10px",
                  borderRadius: 4,
                  border: "1px solid black",
                  width: 300,
                }}
                value={payload.length}
                type="number"
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, length: e.target.value }))
                }
              />
            </div>
          </>
        ) : newProduct.type === "BOOK" ? (
          <>
            <div style={{ marginBottom: 10 }}>
              <p style={{ paddingBottom: 10 }}>Weight (KG)</p>
              <input
                style={{
                  padding: "7px 10px",
                  borderRadius: 4,
                  border: "1px solid black",
                  width: 300,
                }}
                value={payload.weight}
                type="number"
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, weight: e.target.value }))
                }
              />
            </div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: 10 }}>
              <p style={{ paddingBottom: 10 }}>Size (MB)</p>
              <input
                style={{
                  padding: "7px 10px",
                  borderRadius: 4,
                  border: "1px solid black",
                  width: 300,
                }}
                value={payload.size}
                type="number"
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, size: e.target.value }))
                }
              />
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default AddProduct;
