import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
   total:{
    margin:"20px 200px 20px 100px",
   },
   title:{
    fontSize:"26px",
   },
   subnum:{
    display:"flex",
    justifyContent:"flex-end"
   },
   buton2:{
        backgroundColor: 'black',
        color: 'white',
        width: "380px",
        height: "53px",
        backgroundColor: 'black',
        fontSize:"16px",
    
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
        backgroundColor: 'black',
        color:"#A18A68",
        fontSize:"16px",
    },
   },
   buton1:{
    backgroundColor: 'black',
        color: 'white',
        width: "168px",
        height: "43px",
        backgroundColor: 'black',
        fontSize:"16px",
        
        margin:"0 0 0 120px",
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
        backgroundColor: 'black',
        color:"#A18A68",
        fontSize:"16px",
        },
   },
   totl:{
    display:"flex",
    fontSize:"16px",
    justifyContent:"space-between",
    margin:"20px 0px 20px 0px",
    fontWeight:"bold",
   },
   total2:{
    fontSize:"16px",
    fontWeight:"bold",
   },
   numb:{
        display:"flex",
        justifyContent:"flex-end",
        fontSize:"16px",
        fontWeight:"bold",
   },
   numb1:{
     color:"#707070",
}    ,
     bo:{
          display:"flex", 
          
    justifyContent:"space-between",
     },
     btn:{
          display:"flex", 
          
    justifyContent:"space-between",
     }

    
  }));    
  export default useStyles;