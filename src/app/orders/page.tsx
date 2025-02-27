"use client";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Ordes = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const getLibrary = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/cm3offco10000ui9lao2e5rav`
      );

      setOrders(response.data.orders);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLibrary();
  }, []);
  return (
    <section className="container mx-auto h-screen">
      <h1 className="text-gray-400 text-2xl my-10">Ordem de pedidos</h1>
      <TableContainer className="mt-32">
        <Table colorScheme="teal">
          <TableCaption>Ordem de pedidos</TableCaption>
          <Thead>
            <Tr>
              <Th>Data</Th>
              <Th>ID</Th>
              <Th>Documentos</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          {orders.map((order: any, index: number) => (
            <Tbody key={index}>
              <Tr>
                <Td>{new Date(order.createdAt).toLocaleDateString("pt-br")}</Td>
                <Td>{order.id}</Td>
                <Td>{order.products.length}</Td>
                <Td>
                  {Number(order.amount).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </section>
  );
};

export default Ordes;
