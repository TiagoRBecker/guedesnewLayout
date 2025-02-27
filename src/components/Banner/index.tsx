import WpButton from "../WpButton";

const Banner = () => {
    return (
        <section className="w-full h-[640px] bg-[#EBEBEB] flex items-center justify-around">
            <div className="container mx-auto h-[564px] grid grid-cols-3 py-10 ">
                <div className="w-full max-w-[407px]  h-full  flex items-start  flex-col gap-4">
                    <h2 className="text-[#336DFF] uppercase font-semibold">Conheça agora</h2>
                    <h1 className="text-[35px] ">
                        Os documentos certos para proteger sua carreira{" "}
                    </h1>
                    <p className="text-sm">
                        Traga segurança o seu negócio com documentos jurídicos que protegem
                        seus resultados e eliminam riscos.
                    </p>
                    <button className="w-[212px] h-[47px] bg-[#336DFF] rounded-full text-white text-sm">
                        Veja Nossas Soluções
                    </button>
                </div>
                <div className="w-full">
                    <img src="/Assets/Banner/banner.svg" alt="" className="w-full h-full" />
                </div>
                <div className="w-full flex flex-col items-center gap-5">
                    <div className="w-[200px] h-[94px] bg-[#F4F4F4] rounded-md flex items-center justify-center gap-3 flex-col ">
                        <div className="w-[130px] flex  flex-col items-start gap-1  ">
                            <h2 className="text-[#072137] w-full text-sm">
                                Novo contrato de Toxina Botulínica
                            </h2>
                            <a className=" text-left text-[#336DFF] border-b border-[#336DFF]">
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                    <div className="w-[200px] h-[94px] bg-[#F4F4F4] rounded-md flex items-center justify-center gap-3 flex-col ">
                        <div className="w-[130px] flex  flex-col items-start gap-1  ">
                            <h2 className="text-[#072137] w-full text-sm">
                                Novo contrato de Toxina Botulínica
                            </h2>
                            <a className=" text-left text-[#336DFF] border-b border-[#336DFF]">
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                    <div className="w-[200px] h-[94px] bg-[#F4F4F4] rounded-md flex items-center justify-center gap-3 flex-col ">
                        <div className="w-[130px] flex  flex-col items-start gap-1  ">
                            <h2 className="text-[#072137] w-full text-sm">
                                Novo contrato de Toxina Botulínica
                            </h2>
                            <a className=" text-left text-[#336DFF] border-b border-[#336DFF]">
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <WpButton/>
        </section>
    );
};

export default Banner;
