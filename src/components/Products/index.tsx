"use client"
import { useDisclosure } from "@chakra-ui/react";
import ModalProduct from "./Modal";

export type ProductsType = {
  product:{
    id:string,
    name:string,
    price:number
    description:string,
    picture_url:string,
    status?:string

  }
  category?:string
  addCart?: () => void | undefined;
};
const Products = ({addCart,category, product}:any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const renderButton = (status:string) => {
    switch (status) {
      case 'AVAILABLE':
        return <button onClick={addCart} className="w-[140px] h-10 bg-[#336DFF] text-white  rounded-full text-[10px]">Adicionar ao Carrinho</button>;

  
      case 'UNAVAILABLE':
        return <button className="w-[140px] h-10 bg-[#336DFF] text-white  rounded-full text-[10px]" onClick={onOpen}>Indisponível</button>;
  
      default:
        return null; // Caso o status seja inesperado, não exibe nada
    }
  };
  return (
    
    <div className="max-w-[360px] h-full flex flex-col gap-4 bg-[#EFEFEF] rounded-[16px] p-9 bg-opacity-50">
      <h1 className="text-[#336DFF]">{category}</h1>
      <p>{product.name}</p>
      <div className="flex items-center  gap-4">
        {renderButton(product.status)}
        <button className=" w-[140px] flex items-center gap-2 h-10 border border-[#31AF97]  justify-center  rounded-full text-[10px]" onClick={onOpen}>
          <img src="/Assets/Icons/fast.svg" />
          Visualização Rápida
        </button>
      </div>
      <ModalProduct product={product} isOpen={isOpen}  onClose={onClose}/>
    </div>
  );
};

export default Products;
