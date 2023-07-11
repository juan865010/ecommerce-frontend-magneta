import React, { useContext, useState, useEffect } from "react";
import useStyles from "./InfoComent.styles";
import { MyContext } from "../Contexto/MyContext";
import StarRating from "../Stars/Stars";
import { format } from "date-fns";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import Alert from "@mui/material/Alert/Alert";

const InfoComent = () => {
  const classes = useStyles();
  const { idComent, Comentarios, setEditar,setComentarios,setDetalle } = useContext(MyContext);
  const [comentario, setComentario] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    const comentarioEncontrado = Comentarios.find(
      (comentario) => comentario.id === idComent
    );
    setComentario(comentarioEncontrado);
  }, [idComent]);

  const EliminarClick = () => {
    const comentariosActualizados = Comentarios.filter(
      (comentario) => comentario.id !== idComent
    );
    setComentarios(comentariosActualizados);
    setDetalle(false)
  };

  const AprobarClick = () => {
    setOpenSnackbar(true);
    setSnackbarMessage("Comentario aprobado");
  };

  const CloseSnackbar = () => {
    setDetalle(false)
    setOpenSnackbar(false);
  };

  if (!comentario) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={classes.container}>
      <h2 style={{ paddingLeft: 5, margin: 5 }}>Opinion cliente</h2>
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
          <StarRating rating={comentario.Clasificacion}></StarRating>
        </div>
        <p
          style={{
            padding: 20,
          }}
        >
          {comentario.Comentario}
        </p>
      </div>
      <div className={classes.rowX}>
        <div
          className={classes.btn}
          style={{
            backgroundColor: "#758012",
          }}
          onClick={AprobarClick}
        >
          APROBAR
        </div>
        <div
          className={classes.btn}
          onClick={() => setEditar(true)}
          style={{
            backgroundColor: "#000",
          }}
        >
          EDITAR
        </div>
        <div
          className={classes.btn}
          onClick={EliminarClick}
          style={{
            backgroundColor: "red",
          }}
        >
          ELIMINAR
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={CloseSnackbar}
      >
        <Alert
          onClose={CloseSnackbar}
          severity="success"
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default InfoComent;
