import useStyles from "./Panel.styles";
import { useState, useContext } from "react";
import { format } from "date-fns";
import StarRating from "../Stars/Stars";
import { MyContext } from "../Contexto/MyContext";
const Panel = () => {
  const classes = useStyles();
  const { setDetalle, idComent, setIdComent, idProduct, setIdProduct,productsA,Comentarios} =
    useContext(MyContext);
    const Editar = (idC, nmPr) => {
        setIdComent(idC);
        const prdFind = productsA.find((producto) => producto.Nombre === nmPr);
        if (prdFind) {
          setIdProduct(prdFind.id);
        }
        setDetalle(true);
      };
      
  return (
    <div className={classes.container}>
      <table className={classes.tabla}>
        <thead>
          <tr className={classes.title}>
            <th className={classes.tit}>products</th>
            <th className={classes.tit}>CLIENTE</th>
            <th className={classes.tit}>CALIFICACIÓN</th>
            <th className={classes.opcColumn}>OPCIONES</th>
            <th className={classes.tit}>FECHA</th>
            <th className={classes.tit}>ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {Comentarios.map((comentario) => (
            <tr key={comentario.id} className={classes.row}>
              <td>{comentario.Producto}</td>
              <td>{comentario.Cliente}</td>
              <td>
                {" "}
                <StarRating rating={comentario.Clasificacion}></StarRating>
              </td>
              <td className={classes.textRow}>{comentario.Opciones}</td>
              <td>{format(comentario.Fecha, "dd/MM/yyyy")}</td>
              <td>
                <div
                  className={classes.btn}
                  onClick={() => Editar(comentario.id, comentario.Producto)}
                >
                  DETALLE
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Panel;
