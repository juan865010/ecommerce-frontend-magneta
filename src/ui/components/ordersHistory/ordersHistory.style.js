import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";
const useStyles = makeStyles((theme) => ({
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
        borderRadius:'0.75rem',
        backgroundColor:'#FFFFFF',
    },
    xs:{
        // background:'red',
        display: 'flex',
        // flexDirection: 'row',
        marginLeft:'24px',
        height: '673px',
        width:'240px',
        backgroundColor:'#FFFFFF',
    },
    
}));
export default useStyles;