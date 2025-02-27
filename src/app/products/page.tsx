"use client";
import BannerDescript from "@/components/BannerDescript";

import Products, { ProductsType } from "@/components/Products";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { products } from "@/utils/Mock/menu";

const ProductsPage = () => {
  const addTocart = useCartStore((state) => state.addToCart);
  const [showProducts, setShowProducts] = useState(false);
  const [data, setData] = useState([]);
  const showText = showProducts ? "Ocultar Fichas" : "Veja Todas as Fichas";

  return (
    <section className="w-full h-full flex items-center justify-center  flex-col ">
      <div className="w-full  bg-[#EBEBEB] h-[200px]"></div>
      <div className=" w-full -mt-24 ">
        <BannerDescript
          title={"Produtos"}
          descript="A ficha de anamnese é um documento essencial em qualquer atendimento clínico, sendo a base para o diagnóstico e acompanhamento de pacientes. Nela, o profissional de saúde coleta uma série de informações importantes sobre o histórico médico do paciente, estilo de vida, hábitos diários, além de queixas atuais."
        />
      </div>
      <div
        className={
          showProducts ? "w-full h-full" : "w-full h-[500px] overflow-hidden "
        }
      >
        <div className="container mx-auto grid grid-cols-3 xl:grid-cols-4 gap-8 py-16">
          {products.map((product, index: number) => (
            <Products
              key={index}
              product={product}
              //@ts-ignore
              category={product.category}
              addCart={() => addTocart(product)}
            />
          ))}
        </div>
      </div>
      <button
        className="my-10 bg-[#336DFF] w-[230px] py-4 text-white rounded-full"
        onClick={() => setShowProducts(!showProducts)}
      >
        {showText}
      </button>
      <ToastContainer />
    </section>
  );
};

export default ProductsPage;
