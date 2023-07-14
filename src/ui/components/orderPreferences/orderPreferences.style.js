import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    fontFamily: "Inter-Regular",
    [mq("xxs")]: {
      width: "50%",
      height: "100%",
    },
    [mq("md")]: {
      width: "357px",
      height: "307pz",
    },
    border: "1px solid #000",
    borderRadius: "4.286px",
    
  },
  

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  saveButton: {
    backgroundColor: '#000',
    color: '#fff',
    margin: '10px'
    
  },
  cancelButton: {
    backgroundColor: 'red',
    color: '#fff',
    margin: '10px'
  },
  containerSelc: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "10px",
    gridColumnGap: "60px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  boxMark:{
    width:'100%',
    height:'57px',
  },
  titleMark:{
    background:'#F9F8F9',
    padding:'13px 17px',
    width:'100%',
    height:'57px',
  },
}));

export default useStyles;