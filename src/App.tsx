import { Route, Routes } from "react-router-dom";
import Product from "./pages/product/Product";
import ProductContextProvider from "./context/ProductContext";
import AddProduct from "./pages/add_product/AddProduct";

function App() {
  return (
    <ProductContextProvider>
      <div style={{ padding: "0px 40px" }}>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </div>
    </ProductContextProvider>
  );
}

export default App;
