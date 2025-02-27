"use client";
import Carrousel from "@/components/Carrousel";
import { useCartStore } from "@/store/cartStore";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
type Modal = {
  product: {
    id: string;
    title: string;
    price: number;
    description: string;
    picture_url: string;
    status: string;
    images: [];
  };
  isOpen: boolean;
  onClose: () => void;
};
const ModalProduct = ({ isOpen, onClose, product }: Modal) => {
  const addTocart = useCartStore((state) => state.addToCart);
  const handleToCartAndCloseModal: any = (product: any) => {
    addTocart(product);
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent className="py-10">
          <ModalHeader>
            <img src="/Assets/Logo/logo.svg" alt="logo" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {product.status === "UNAVAILABLE" ? (
              <div className="w-full h-full flex flex-col gap-3 ">
                <div className="w-full h-[450px]  flex items-center justify-center">
                  <img
                    src="/Assets/Banner/caution.svg"
                    alt="Banner"
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="flex-grow">
                  <Link
                    href={"/customs"}
                    className=" max-w-[50%] mx-auto flex items-center justify-center gap-2 border border-[#31AF97]  py-2 px-4 rounded-full text-sm"
                  >
                    <button className=" flex gap-2">
                      <img src="/Assets/Icons/fast.svg" />
                      Solicitar Documentos Personalizados
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center w-full h-[600px] gap-4">
                <div className="w-[50%] flex items-center justify-center ">
                  <Carrousel>
                    {product.images?.map((img: string, index: number) => (
                      <div className="w-full h-full" key={index}>
                        <img
                          src={img}
                          alt="Carrousel"
                          className="w-full h-full"
                        />
                      </div>
                    ))}
                  </Carrousel>
                </div>

                <div className="w-[50%]  flex flex-col gap-5">
                  <h1 className="text-[#336DFF] uppercase font-bold">
                    {product.title}
                  </h1>
                  <span className="font-bold">
                    {product?.price?.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <p>
                    A toxina botulínica é uma substância utilizada para relaxar
                    temporariamente os músculos, sendo amplamente aplicada em
                    procedimentos estéticos e terapêuticos. No campo estético,
                    suaviza rugas e linhas de expressão. Já na medicina, trata
                    condições como bruxismo, hiperidrose e espasmos musculares.
                    Seus efeitos são temporários, durando de três a seis meses,
                    e o procedimento deve ser realizado por profissionais
                    qualificado. Um contrato de prestação de serviços para
                    toxina botulínica é essencial para garantir segurança
                    jurídica tanto ao profissional quanto ao paciente. Ele
                    define direitos, deveres, contraindicações, riscos e
                    consentimentos, prevenindo conflitos e resguardando ambas as
                    partes. Além de ser um respaldo legal, o contrato reforça a
                    transparência e a confiança no procedimento estético
                  </p>

                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="bg-[#336DFF] text-white py-2 px-4 rounded-full text-sm"
                      onClick={() => handleToCartAndCloseModal(product)}
                    >
                      Adicionar o Carrinho
                    </button>
                    <Link
                      href={"/cart"}
                      className="flex items-center justify-center gap-2 border border-[#31AF97]  py-2 px-4 rounded-full text-sm"
                    >
                      <button className=" flex gap-2">
                        <img src="/Assets/Icons/fast.svg" />
                        Comprar Agora
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalProduct;
