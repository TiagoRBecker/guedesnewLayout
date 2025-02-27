"use client";
import { useCartStore } from "@/store/cartStore";
import { Checkbox, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [ code , setCode]= useState("")
 const {totalValue,discountedTotal,cart,removeFromCart, applyDiscount} = useCartStore()


 useEffect(()=>{},[code])

  
  if (cart.length === 0) {
    return (
      <section className="w-full h-screen flex items-center justify-center bg-[#EBEBEB] py-10">
        <p className="text-2xl text-gray-600">
          Nenhum item adicionado ao carrinho !
        </p>
      </section>
    );
  }
  return (
    <section className="w-full h-screen bg-[#EBEBEB] py-10">
      <h1 className="container mx-auto text-3xl text-left">
        Lista de Produtos
      </h1>
      <div className="container mx-auto grid grid-cols-2 gap-32">
        <div className="w-full flex-col  flex items-center justify-center">
          <div className="w-full  flex items-center justify-center flex-col pt-10 gap-4 ">
            {cart.map((item, index) => (
              <div
                className="w-full h-[90px] flex items-center gap-1 justify-around shadow-lg rounded-md flex-shrink-0 flex-grow-0 bg-white"
                key={index}
              >
                <span className="text-base">{item.title}</span>
                <span className="text-[#336DFF] text-base">
                  {item.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <p className="cursor-pointer" onClick={() => removeFromCart(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-red-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full   flex flex-col  pt-10 gap-4  ">
          <h1 className="uppercase text-2xl">Detalhes do Pagamento</h1>
          <div className="">
            <Checkbox border={"#336DFF"} colorScheme="green">
              Termos de Contrato
            </Checkbox>
          </div>
          <div className="w-full  flex items-center gap-1 ">
            <Input
              type="text"
              value={code}
              onChange={(e)=>setCode(e.target.value)}
              placeholder="Insira seu cupom"
              bg={"white"}
              h={50}
              className="outline-none border-[1px] border-[#336DFF] w-[70%]"
            />
            <button
              onClick={()=>applyDiscount(code)}
              className="w-[30%] h-[49px]  bg-[#336DFF] flex items-center justify-center gap-3 text-white rounded-md "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                />
              </svg>
              Aplicar
            </button>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="  ">Subtotal</span>
           
              <p className="text-xl">
                {totalValue.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            
          </div>
        
         
          <button className="w-full  mt-6 py-4 bg-[#336DFF] text-white rounded-full text-xlflex items-center justify-center">
            Finalizar Compra
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
/*  <div className="flex flex-col w-full ">
           <div className="flex w-full items-center justify-between border-b-[1px] border-gray-200">
            <p>Cupom</p>
            <p>Cupom Name 35%</p>
           </div>
           <div className="flex w-full items-center justify-between border-b-[1px] border-gray-200">
            
            <span className=" font-bold uppercase">Total</span>
           
              <p className="font-bold text-xl">
                {discountedTotal?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            
          </div>
          </div>*/ 