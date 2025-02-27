"use client";
import BannerDescript from "@/components/BannerDescript";
import Products from "@/components/Products";
import { Item, useCartStore } from "@/store/cartStore";
import { useParams } from "next/navigation";
import React, {  useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
type Categories = {
  id: string;
  name: string;
  description: string;
  products: Item[];
};
const CategoriesPageID = () => {
  const params = useParams();
  const id = params.id;
  const [categories, setCategories] = useState<Categories>();
  useEffect(() => {}, []);
  const addTocart = useCartStore((state) => state.addToCart);



  return (
    <section className="w-full flex items-center justify-center  flex-col ">
      <div className="w-full  bg-[#EBEBEB] h-[200px]"></div>
      <div className="-mt-24 w-full">
        <BannerDescript
          title={categories?.name as string}
          descript="A ficha de anamnese é um documento essencial em qualquer atendimento clínico, sendo a base para o diagnóstico e acompanhamento de pacientes. Nela, o profissional de saúde coleta uma série de informações importantes sobre o histórico médico do paciente, estilo de vida, hábitos diários, além de queixas atuais."
        />
      </div>
      <div className="container mx-auto grid grid-cols-3 xl:grid-cols-4 gap-8 py-24">
        {categories?.products.map((product, index: number) => (
          <Products
            key={index}
            product={product}
            category={categories.name}
            addCart={() => addTocart(product)}
          />
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default CategoriesPageID;
