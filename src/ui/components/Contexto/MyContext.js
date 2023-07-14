import React, { createContext, useState } from "react";

import { comentarios } from "../../../data/comentarios";
import {products} from "../../../data/products"
const MyContext = createContext();
const MyContextProvider = (props) => {
  const [editar, setEditar] = useState(false);
  const [idComent, setIdComent] = useState(1);
  const [idProduct, setIdProduct] = useState(112432);
  const [Comentarios, setComentarios] = useState(comentarios)
  const [productsA, setproductsA] = useState(products)
const [detalle, setDetalle] = useState(false)
  return (
    <MyContext.Provider
      value={{
        editar,
        setEditar,
        detalle,
        setDetalle,
        idComent,
        setIdComent,
        idProduct,
        setIdProduct,
        Comentarios,
        setComentarios,
        productsA,
        setproductsA
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, MyContext };
