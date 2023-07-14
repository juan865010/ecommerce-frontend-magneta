import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";
const useStyles = makeStyles((theme) => ({
  container: {
    margin:10,
    borderRadius:10,
    backgroundColor: theme.palette.primary.main,
    paddingTop:1,
    width:'80%',
    fontSize: 13,
  },
  tabla: {
    margin: 10,
    backgroundColor: "#fff",
    paddingTop: 10,
    borderRadius: 10,
    borderCollapse: "collapse",
    backgroundColor: theme.palette.primary.main,
    fontFamily:"Poppins-Regular"
  },
  title: {
    textAlign: "left",
    fontFamily: "Sans-serif",
    fontWeight: "900",
    fontSize: 14,
    backgroundColor: "#f0f0f0",
    fontFamily:"Poppins-Regular"
  },
  opcColumn: {
    width: "30%",
    paddingLeft:10
  },
  tit:{
    paddingTop:10,
    paddingBottom:10,
    marginRight:20
  },
  row:{
    borderBottom:'1px solid #b3b3b3',
  },
  textRow:{
    padding:10
  },
  btn:{
    backgroundColor:'#000',
    color:theme.palette.primary.main,
    textAlign:'center',
    padding:3,
    borderRadius:7,
    fontSize:10,
    fontWeight:'600',
    cursor:'Pointer'
  },
}));
export default useStyles;
