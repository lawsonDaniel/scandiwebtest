import React, { createContext, useContext, useEffect, useState } from "react";
import { Products } from "../types/Product";
import db from "../firebase"
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { productLists } from "../utils/data";

interface ProductType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  updateWillDelete: (item: Products) => void;
  visible: boolean;
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  addProduct: (
    newProduct: Partial<Products>,
    payload: {
      height: string;
      width: string;
      length: string;
      size: string;
      weight: string;
    }
  ) => Promise<any>;
  deleteProduct: () => Promise<any>;
}

interface IProps {
  children: JSX.Element;
}

const ProductContext = createContext<ProductType | null>(null);

export const useProduct = () => useContext(ProductContext) as ProductType;

const ProductContextProvider: React.FC<IProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Products[]>(productLists);
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const addProduct = async (
    newProduct: Partial<Products>,
    payload: {
      height: string;
      width: string;
      length: string;
      size: string;
      weight: string;
    }
  ) => {
    const productCollectionRef = collection(db, "products");
    const productPayload: Partial<Products> = {
      name: newProduct.name,
      price: newProduct.price,
      sku: newProduct.sku,
      type: newProduct.type,
      payload:
        newProduct.type === "FURNITURE"
          ? {
              width: payload.width,
              height: payload.height,
              length: payload.height,
            }
          : newProduct.type === "BOOK"
          ? { weight: payload.weight }
          : { size: payload.size },
    };
    try {
      await addDoc(productCollectionRef, productPayload);
      alert("added successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async () => {
    const selected = products
      .filter((item) => item.will_delete === true)
      .map((item) => item.id);
    try {
      for (let index = 0; index < selected.length; index++) {
        await deleteDoc(doc(db, "products", selected[index]));
      }
      alert("Deleted successfully");
    } catch (err) {
      console.error(err);
    }
  };

  const updateWillDelete = (item: Products) => {
    setProducts((prevState) =>
      prevState.map((items: Products) =>
        items.id === item.id
          ? { ...items, will_delete: !items.will_delete }
          : items
      )
    );
  };

  useEffect(() => {
    setVisible(
      products.find((item) => item.will_delete === true) ? true : false
    );
  }, [products]);

  useEffect(() => {
    setIsLoading(true);
    const subscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          type: doc.data().type,
          payload: doc.data().payload,
          price: doc.data().price,
          sku: doc.data().sku,
          will_delete: false,
        }))
      );
      setIsLoading(false);
    });
    return () => {
      subscribe();
    };
  }, []);

  const value: ProductType = {
    isLoading,
    setIsLoading,
    visible,
    updateWillDelete,
    products,
    setProducts,
    addProduct,
    deleteProduct,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
