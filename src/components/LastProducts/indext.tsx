"use client";
import { products } from "@/utils/Mock/menu";
import Products from "../Products";
import { useCartStore } from "@/store/cartStore";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

const LastProducts = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const products = await axios.get(`http://localhost:3001/products/last`);
      setData(products.data);
      return;
    } catch (error) {
    } finally {
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="container mx-auto h-full flex flex-col py-36 items-center justify-center">
      {data && data.length > 0 && (
        <>
          <h1 className="uppercase text-2xl py-10 text-left w-full">
            Novas Atualizações
          </h1>
          <div className="w-full grid grid-cols-4 gap-8">
            {data.map((product, index: number) => (
              <Products
                key={index}
                product={product}
                //@ts-ignore
                category={product.Categories.name}
                addCart={() => addToCart(product)}
              />
            ))}
          </div>
          <ToastContainer />
        </>
      )}
    </section>
  );
};

export default LastProducts;
