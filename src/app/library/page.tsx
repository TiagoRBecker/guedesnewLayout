"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Libary = () => {
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState(false);
  const getLibrary = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/cm3offco10000ui9lao2e5rav`
      );

      setLibrary(response.data.LibraryItem);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLibrary();
  }, []);
  const [progress, setProgress] = useState(0);
  const handleDownload = async () => {
   

    try {
      const response = await axios.get("", {
        responseType: "blob", 
        onDownloadProgress: (progressEvent) => {
          const total = progressEvent.total || 1; 
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / total
          );
          setProgress(percentCompleted);
        },
      });
      return 
    } catch (error) {
      console.error("Erro durante o download", error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <p>Download em andamento aguarde {progress} %</p>;
  }
  return (
    <section className="mx-auto container h-screen py-20">
      <h1 className="text-gray-400 text-2xl">
        Bem vindo a sua biblioteca de documentos{" "}
      </h1>
      <div className="w-full grid grid-cols-4 py-10">
        {library.map((item: any, index: number) => (
          <div
            key={index}
            className="max-w-[360px]  h-full flex flex-col gap-4  shadow-2xl rounded-[16px] bg-opacity-50"
          >
            <h1 className="text-[#336DFF] w-full truncate p-2">{item.title}</h1>
            <div className="w-full">
              <img
                src="/Assets/Banner/banner.svg"
                alt="Doc"
                className="w-full max-h-[150px]"
              />
            </div>
            <div className="flex items-center justify-center  ">
              <button
                onClick={handleDownload}
                className="w-full bg-[#336DFF] h-10 text-white flex items-center gap-2 justify-center   text-base"
              >
                Baixar Documento
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Libary;
