"use client";
import { SignupData, signup } from "@/utils/validation/signup";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    getValues,
    formState: { errors },
  } = useForm<SignupData>({
    mode: "all",
    resolver: zodResolver(signup),
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/signup`,
        data
      );
      await Swal.fire({
        title: "Conta criada com sucesso",
        text: "Deseja fazer Login?",
        icon: "success",
      });
      return response;
    } catch (error: any) {
      console.log(error)
      await Swal.fire({
        title: "Erro ao criar a conta ",
        text: `${error.response.data.message}`,
        icon: "error",
      });
    } finally {
    }
  });
  return (
    <form
      className="w-full h-full  flex  flex-col gap-4 mt-10 "
      onSubmit={onSubmit}
    >
      <h1 className="uppercase  py-2">Cadastrar</h1>
      <Input
        {...register("name")}
        placeholder="Nome Completo"
        type="text"
        className="outline-none bg-[#EBEBEB] rounded-full pl-4  my-4"
      />
      {errors.name && (
        <p className="text-red-500 pl-2">{errors.name.message}</p>
      )}

      <Input
        {...register("phone")}
        placeholder="Telefone"
        type="text"
        className="outline-none bg-[#EBEBEB] rounded-full pl-4  "
      />
      {errors.phone && (
        <p className="text-red-500 pl-2">{errors.phone.message}</p>
      )}
      <Input
        {...register("profession")}
        placeholder="Profissão"
        type="text"
        className="outline-none bg-[#EBEBEB] rounded-full pl-4  "
      />

      {errors.profession && (
        <p className="text-red-500 pl-2">{errors.profession.message}</p>
      )}
      <Input
        {...register("email")}
        placeholder="Email"
        type="email"
        className="outline-none bg-[#EBEBEB] rounded-full pl-4  ="
      />
      {errors.email && (
        <p className="text-red-500 pl-2">{errors.email.message}</p>
      )}
      <InputGroup size="md">
        <Input
          {...register("password")}
          className="outline-none bg-[#EBEBEB] rounded-full pl-4 w-[100%]  "
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? (
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
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
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
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
      {errors.password && (
        <p className="text-red-500 pl-2">{errors.password.message}</p>
      )}
      <InputGroup size="md">
        <Input
          {...register("confirmPassword")}
          className="outline-none bg-[#EBEBEB] rounded-full pl-4 w-[100%]  "
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
      </InputGroup>
      {errors.confirmPassword && (
        <p className="text-red-500 pl-2">{errors.confirmPassword.message}</p>
      )}
      <div className="w-full flex items-center justify-end">
        <Button
          type="submit"
          w={75}
          h={35}
          rounded={"full"}
          bg={"#336DFF"}
          color={"white"}
          fontSize={"sm"}
        >
          Criar
        </Button>
      </div>
    </form>
  );
};

export default Signup;
