import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";
const useStyles = makeStyles((theme) => ({
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
        borderRadius:'0.75rem',
        backgroundColor:'#FFFFFF',
    },
    xs:{
        display: 'flex',
        flexDirection: 'row',
        height: '37.5rem',
        width:'15rem',
        backgroundColor:'#FFFFFF',
    },
    
}));
export default useStyles;
