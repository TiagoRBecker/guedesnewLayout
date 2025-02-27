"use client";
import Banner from "@/components/Banner";
import DocsEmphasis from "@/components/Docs";
import LastProducts from "@/components/LastProducts/indext";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <LastProducts />

      <section className="w-full h-[431px] bg-[#336DFF]">
        <div className="w-full h-full grid grid-cols-2">
          <div className=" ">
            <img
              src="/Assets/Banner/banner1.svg"
              alt=""
              className="w-full h-[550px] -mt-[120px]"
            />
          </div>
          <div className="w-full flex items-start flex-col gap-4">
            <h2 className="text-2xl text-white pt-[118px]">
              Organize e otimize o atendimento
            </h2>
            <h2 className="text-2xl text-white">
              {" "}
              com nossas fichas de anamnese
            </h2>
            <p className="text-white">
              Facilite o diagnóstico e o acompanhamento dos seus pacientes de
              forma prática e eficiente.
            </p>
            <button className=" w-[199px] h-12 bg-white text-[#336DFF] rounded-full text-sm">
              Veja Nossas Fichas
            </button>
          </div>
        </div>
      </section>
      <DocsEmphasis />
      <section className="container h-[280px] bg-[#336DFF] rounded-md mx-auto z-50 relative">
        <div className="w-full h-full grid grid-cols-2">
          <div className="w-full text-center ">
            <h2 className="text-3xl text-white pt-[118px]">
              Está procurando algo específico{" "}
            </h2>
            <h2 className="text-3xl text-white"> e não encontrou por aqui?</h2>
          </div>
          <div className="max-w-[650px] flex items-end  justify-center flex-col gap-2">
            <p className="text-white">
              Entre em contato com a nossa equipe para que
            </p>
            <p className="text-white">
              {" "}
              possamos ajudar você com a melhor solução possíve
            </p>
            <button className=" w-[199px] h-12 bg-white text-[#336DFF] rounded-full text-sm">
              Solicite ajuda
            </button>
          </div>
        </div>
      </section>
      <Testimonials />
    </main>
  );
}
