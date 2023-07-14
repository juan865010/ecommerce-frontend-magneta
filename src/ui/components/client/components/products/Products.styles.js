import { makeStyles } from '@material-ui/core';
import mq from "../../../../../config/mq";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "left",
    backgroundColor: theme.palette.primary.main,
    fontFamily: "Inter-Regular",
    padding: "50px",
  },
  img: {
    width: "20px",
    height: "auto",
  },
  imgen: {
    width: "24px",
    height: "auto",
    float: "right",
  },
  container: {
    display: "grid",
    gridTemplateRows: "repeat(4, 1fr)",
    height: "450px",
    margin: "5px 15px 5px 10px",
  },
  image: {
    width: "300px",
    height: "300px",
  },
  fila2: {
    margin: "0 0 0 0",
    padding: "10px 0 0 0",
    fontSize: "20px",
  },
  fila3: {
    margin: "0 0 0 0",
    color: "#686868",
    textAlign: "justify",
  },
  fila4: {
    color: "#A18A68",
    fontSize: "20px",
    margin: "0 0 0 0",
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #D8D8D8',
    borderRadius: '4px',
    padding: theme.spacing(1),
    width: '330px',
    height: '53px',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    margin: theme.spacing(1),
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    width:"263px",
    margin: "0 0 0 5px",
  },
  searchIcon: {
    color: 'black',
    marginLeft: theme.spacing(1),
  },
  filter:{
    width:"262px",
    height: '300px',
  },
  dispo:{
    width:"250px",
    margin:"0 0 0 10px",
  }
}));

export default useStyles;
