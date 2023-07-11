import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    marginTop: 15,
    padding: 10,
    fontFamily: "Poppins-Regular",
    width: "55%",
    justifyContent: "center",
    position:'relative'
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  cliente: {
    fontSize: 12,
    fontFamily: "Sans-serif",
    fontWeight: "bold",
  },
  bxOpinion: {
    width: "95%",
    border: "2px solid #c9c9c9",
    margin: "auto",
  },
  rowX: {
    display: "flex",
    position: "absolute",
    bottom: 10,
    width: "100%",
    justifyContent: "space-around",
  },
  btn:{
    color:'#fff',
    textAlign:'center',
    padding:5,
    borderRadius:7,
    fontSize:13,
    cursor:'Pointer'
  },
}));
export default useStyles;
