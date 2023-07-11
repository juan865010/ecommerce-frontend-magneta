import React, { createContext, useState } from "react";

import { comentarios } from "../../../data/comentarios";
import {Productos} from "../../../data/productos"
const MyContext = createContext();
const MyContextProvider = (props) => {
  const [editar, setEditar] = useState(false);
  const [idComent, setIdComent] = useState(1);
  const [idProduct, setIdProduct] = useState(112432);
  const [Comentarios, setComentarios] = useState(comentarios)
  const [ProductosA, setProductosA] = useState(Productos)
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
        ProductosA,
        setProductosA
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, MyContext };
