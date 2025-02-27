"use client";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import Cart from "../checkout";
import { useState } from "react";
import Perfil from "../Perfil";
import { Signin } from "../Forms/Signin";
import { links } from "@/utils/Mock/menu";
import { useSession } from "next-auth/react";

const Menu = () => {
   const {data:session,status} = useSession()
  const [showCart, setShowCart] = useState(false);
  
  const cart = useCartStore((state) => state.cart);


  return (
    <nav className="w-full h-[104px] flex items-center justify-around bg-[#EBEBEB] ">
      <div className="">
        <Link href={"/"}>
          <img src="/Assets/Logo/logo.svg" alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <li className="list-none text-[#336DFF] border-r border-[#336DFF]   px-2">
          <Link href={"/"}>Início</Link>
        </li>
        {links.map((link, index: number) => (
          <li key={index} className=" list-none">
            <Link href={`/categories/${link.id}`} className="">
              {link.name}
            </Link>
          </li>
        ))}
        <li className=" list-none">
          <Link href={"/products"}>Produtos</Link>
        </li>
      </div>
      <div className=" flex items-center gap-5">
        <div
          className="relative cursor-pointer "
          onClick={() => setShowCart(true)}
        >
          <img src="/Assets/Icons/cart.svg" alt="" className="w-10 h-10" />
          <p className="w-6 h-6 bg-[#31AF97] rounded-full text-white flex items-center justify-center top-0 right-0 absolute">
            {cart.length}
          </p>
        </div>
      {
       status === 'authenticated' && <Perfil/>
      }
       {
        status === 'loading'  &&  <p className="text-gray-400">carregando ...</p>
      }
      {
        status === 'unauthenticated'  &&   <Signin />
      }
       
      </div>
      {showCart && <Cart handleCloseMenu={() => setShowCart(false)} />}
    </nav>
  );
};

export default Menu;
