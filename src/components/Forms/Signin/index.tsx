"use client";

import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Box,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { login, LoginData } from "@/utils/validation/signin";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

export const Signin = () => {
  const { onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    getValues,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "all",
    resolver: zodResolver(login),
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    setError("");
    try {
      setLoading(true);
      const login = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (login?.ok) {
        return;
      }
      setError(login?.error as string);

      return;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });
  return (
    <Menu>
      <MenuButton>
        <img src="/Assets/Icons/login.svg" alt="" />
      </MenuButton>
      <MenuList className="mt-7 w-[400px] h-[450px] bg-[#F8F8F8] shadow-2xl p-4 flex flex-col  rounded-md">
        <Box
          display="flex"
          w="full"
          gap={4}
          alignItems="center"
          justifyContent="start"
          textAlign={"left"}
        >
          <Text textStyle="1xl">ENTRAR</Text>
        </Box>
        
        <div className="w-full h-full">
          <div className="w-full flex flex-col h-[300px] relative ">
            <form
              className="w-full h-full flex flex-col gap-2 py-3 "
              onSubmit={onSubmit}
            >
              <div className="w-full h-[70px]  flex flex-col gap-2 ">
                <Input
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                  className="outline-none  rounded-full pl-4  h-[40px]"
                />
                {errors.email && (
                  <p className="text-red-500 pl-2">{errors.email.message}</p>
                )}
              </div>
              <div className="w-full h-[70px] flex flex-col gap-2 ">
                <Input
                  {...register("password")}
                  placeholder="Senha"
                  type="text"
                  className="outline-none  rounded-full pl-4  h-[40px]"
                />
                {errors.password && (
                  <p className="text-red-500 pl-2">{errors.password.message}</p>
                )}
              </div>

              <div className="w-full ">
                <p className="text-red-500 text-left">{error}</p>
              </div>
              <div className="w-full flex items-center justify-end">
                <Button
                  w={75}
                  h={35}
                  rounded={"full"}
                  bg={"#336DFF"}
                  color={"white"}
                  fontSize={"sm"}
                  type="submit"
                >
                  Entrar
                </Button>
              </div>
            </form>
            <Text textStyle="sm" pl={4}>
              Conecte-se com uma conta
            </Text>

            <div className="w-full flex items-center justify-center  ">
              <button onClick={()=>{signIn('google',{redirect:false,callbackUrl:"/"})}} className="w-full gap-3  flex items-center justify-start  rounded-full shadow-lg px-6 py-2 text-sm font-medium text-gray-400  ">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="800px"
                  height="800px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      {" "}
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        {" "}
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        ></path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
                <span>Continue com Google</span>
              </button>
            </div>
            <div className="w-full flex items-center justify-center mt-4  ">
              <button className="w-full gap-3 bg-[#1877F2]  flex items-center justify-start  rounded-full shadow-lg px-6 py-2 text-sm font-medium text-white">
                <img src="/Assets/Icons/fb.svg" alt="" className="h-6 w-6 " />
                <span>Continue com Facebook</span>
              </button>
            </div>
          </div>
        </div>
        
        <MenuItem onClick={onClose}>
          <Link href={"/signup"}>
            <p>Cadastrar </p>
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
