import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";
const useStyles = makeStyles((theme) => ({
<<<<<<< HEAD
    containersx:{ 
        // background:'green',
        height:'673px',
        width:'1176px',
        padding:'0px',
        margin:'0px',
        // padding:'1.063rem 1.375rem 0rem 1.125rem', 
    },
    sx:{
        // background:'red',
        display: 'flex',
        // flexDirection: 'left',
        height: '673px',
        width:'912px',
=======
    containerPaperMax:{
        width:'73.5rem',
    },
    containerPaperPedidos: {
        height:'42.063rem',
        width:'57rem',
        display:'flex',
        flexDirection:'column',
        padding:'1.25rem',
        backgroundColor:'red',
    },
    containerPaperFilter:{
        height:'42.063rem',
        width:'15rem',
        display:'flex',
        flexDirection:'column',
        padding:'1.25rem',
        backgroundColor:'blue',
    },
    containersx:{ 
        maxHeight:'100%',
        maxWidth:'76rem',
        padding:'1.063rem 1.375rem 0rem 1.125rem', 
    },
    sx:{
        display: 'flex',
        flexDirection: 'left',
        height: '37.5rem',
        width:'56.25rem',
>>>>>>> 4f158bd19a70584a1352ff6855ae646539b582e0
        borderRadius:'0.75rem',
        backgroundColor:'#FFFFFF',
    },
    xs:{
<<<<<<< HEAD
        // background:'red',
        display: 'flex',
        // flexDirection: 'row',
        marginLeft:'24px',
        height: '673px',
        width:'240px',
=======
        display: 'flex',
        flexDirection: 'row',
        height: '37.5rem',
        width:'15rem',
>>>>>>> 4f158bd19a70584a1352ff6855ae646539b582e0
        backgroundColor:'#FFFFFF',
    },
    
}));
export default useStyles;
