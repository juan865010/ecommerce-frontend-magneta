import { makeStyles } from '@material-ui/core';
import mq from "../../../../../config/mq";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #D8D8D8',
    backgroundColor: theme.palette.primary.main,
    margin: "0 50px 0 50px",
    
    
  },
  image:{
    width: "24px",
    margin: "0 20px 0 15px",
    
  },
  imagelink:{
    width: "24px",
    margin: "10px 20px 0 15px",
    
  },
  link:{
    textDecoration: "none",
    color: "black",
    margin: "0 20px 0 0",
    fontSize: "16px",
  },
  title: {
    color: "black",
    fontSize: "35px",
    textDecoration: "none",
    margin: "10px 10px 10px 0px",
  },
  col2:{
    margin: "0px 0px 0px 0px",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  barra:{
    color: '#red',
  }
}));
export default useStyles;