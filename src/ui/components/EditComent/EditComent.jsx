import React, { useContext, useState, useEffect } from "react";
import useStyles from "./EditComent.styles";
import { MyContext } from "../Contexto/MyContext";
import { format } from "date-fns";
import EditableStarRating from "./EditableStarRating";

const EditComent = () => {
  const classes = useStyles();
  const { idComent, Comentarios, setComentarios, setEditar } = useContext(MyContext);
  const [comentario, setComentario] = useState(null);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nuevaClasificacion, setNuevaClasificacion] = useState(0);

  useEffect(() => {
    const comentarioEncontrado = Comentarios.find(
      (comentario) => comentario.id === idComent
    );
    setComentario(comentarioEncontrado);
    setNuevoComentario(comentarioEncontrado.Comentario);
    setNuevaClasificacion(comentarioEncontrado.Clasificacion);
  }, [idComent]);

  const ComentarioChange = (event) => {
    setNuevoComentario(event.target.value);
  };

  const GuardarClick = () => {
    const comentariosActualizados = Comentarios.map((c) => {
      if (c.id === idComent) {
        return {
          ...c,
          Comentario: nuevoComentario,
          Clasificacion: nuevaClasificacion,
        };
      }
      return c;
    });
    setComentarios(comentariosActualizados);
    setEditar(false);
  };

  const ClasificacionChange = (rating) => {
    setNuevaClasificacion(rating);
  };

  if (!comentario) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={classes.container}>
      <h2 style={{ paddingLeft: 5, margin: 5 }}>Opinión cliente</h2>
      <div className={classes.row}>
        <img
          style={{ width: 50, height: 50, borderRadius: 100 }}
          src="./img/iphone12mini.jpg"
          alt=""
        />
        <div className={classes.cliente}>
          <p>{comentario.Cliente}</p>
          <p>
            {format(comentario.Fecha, "dd-MM-yyyy")}{" "}
            {format(comentario.Fecha, "HH:mm")}
          </p>
        </div>
      </div>
      <div className={classes.bxOpinion}>
        <div className={classes.row} style={{ backgroundColor: "#c9c9c9" }}>
          <h2 style={{ margin: 5, paddingLeft: 10 }}>Opinión</h2>
          <EditableStarRating
            rating={nuevaClasificacion}
            onRatingChange={ClasificacionChange}
          />
        </div>
        <textarea
          style={{
            padding: 20,
            width: "100%",
            resize: "block",
            height: "30vh",
          }}
          value={nuevoComentario}
          onChange={ComentarioChange}
        />
      </div>
      <div className={classes.bxClasificacion}>
        <h2 style={{ paddingLeft: 5, margin: 5 }}>Clasificación</h2>
        <EditableStarRating
          rating={nuevaClasificacion}
          onRatingChange={ClasificacionChange}
        />
      </div>
      <div className={classes.rowX}>
        <div
          className={classes.btn}
          style={{
            backgroundColor: "#000",
          }}
          onClick={GuardarClick}
        >
          GUARDAR
        </div>
        <div
          className={classes.btn}
          style={{
            backgroundColor: "red",
          }}
          onClick={()=>setEditar(false)}
        >
          CANCELAR
        </div>
      </div>
    </div>
  );
};

export default EditComent;
