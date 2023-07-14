import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "left",
      backgroundColor: theme.palette.primary.main,
      fontFamily: "Inter-Regular",
      padding: "50px",
    },
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        height: "400px",
        margin: "5px 30px 0 10px"
    },
    img:{
        width: "100px",
    },
    colum2:{
        flex: '80%',
    },
    colum1:{
        flex: '20%',
    },
    container2: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        height: "400px",
        margin: "10px 0px 0px 50px",
    },
    imag:{
        width:"120px",
        height: "120px",
        margin: "5px 50px 25px 50px",
        borderRadius: "8px",
    },
    image:{
        width: "540px",
        height: "600px",
        margin: "5px 75px 50px 25px",
        borderRadius: "8px",
    },
    name:{
        fontFamily: "Inter-Regular",
        fontSize: "28px",
        lineHeight: "35px",
        color: "#00000",
        margin: "20px 0 0 0",

    },
    price:{
        color: "#A18A68",
        fontSize: "20px",
        margin: "5px 0 20px 0",
    },
    image:{
        margin: " 0 0 10 0",
    },
    imgn:{
        width:"135px",
        height: "27",
        margin: "20px 0 0 0",
    },
    description:{
        fontSize: "20px",
    },
    descriptions:{
        color:"#707070",
        fontSize:"16px",
    },
    col2:{
        margin:"0px 20px 0 20px",
    }  ,
    cuerp:{

    }  ,
    conta: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin:"20px 50px 0 0px",
    },
    corazon: {
        marginRight: theme.spacing(1),
        width:"50px",
        height:"45px",
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        width: 194,
        height: 53,
        backgroundColor: 'black',
        fontSize:"18px",
    
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
        backgroundColor: 'black',
        color:"#A18A68",
        fontSize:"18px",
        },
    },

  }));    
  export default useStyles;