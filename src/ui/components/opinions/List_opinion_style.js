import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';
const useStyles = makeStyles((theme) => ({
    containersx:{ 
        height:'673px',
        width:'1176px',
        padding:'0px',
        margin:'0px',
    },
    sx:{

        display: 'flex',
        height: '673px',
        width:'912px',
        borderRadius:'0.75rem',
        backgroundColor: theme.palette.primary.main,
    },
    xs:{
        display: 'flex',
        marginLeft:'24px',
        height: '673px',
        width:'240px',
        backgroundColor: theme.palette.primary.main,
    },
    
}));
export default useStyles;