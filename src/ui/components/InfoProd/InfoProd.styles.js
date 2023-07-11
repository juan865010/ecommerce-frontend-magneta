import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 5,
    fontFamily: "Poppins-Regular",
    width:'100%'
  },
  img: {
    maxWidth: "100%",
    maxHeight:'100%'
  },
  bximg: {
    width: "40%",
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems:'center',
    border: "1px solid #e9d6d6",
    borderRadius: 20,
  },
  row: {
    display: "flex",
    width: "100%",
  },
  est: {
    width: "58%",
    marginLeft: 20,
  },
  nombre: {
    fontSize: 25,
    margin: 0,
  },
  id: {
    margin: 0,
  },
  Precio: {
    fontSize: 25,
    margin: 0,
    fontWeight: "bold",
  },
  rowD: {
    display: "flex",
    justifyContent: "space-around",
    margin:0,
    fontSize:12
  },
  descripcion: {
    padding: 10,
    backgroundColor: "#eeeeee",
  },
}));
export default useStyles;
