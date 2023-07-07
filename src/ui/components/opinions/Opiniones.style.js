import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";
const useStyles = makeStyles((theme) => ({
    Container:{
        width: "57rem",
        height: "42rem",
        left: "15rem",
        display: "flex",
        border:"1px solid #CDCDCD",
        borderRadius: "0.75rem",
        backgroundColor: theme.palette.primary.main,        
    },
    TableContainer: {
        width: "874px",
        marginTop: "22px",
        alignItems: "center",
        overflowX: "auto",
        borderRadius: "6px"
    },

    TableHead:{
        borderRadius: "6px",
        backgroundColor: theme.palette.secondary.space,
        fontFamily:"Poppins-Regular",
    },

    TableRow:{
        fontFamily:"Poppins-Regular",
        color: theme.palette.secondary.grayishBlue, 
    },

    buton:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:"5px, 12px",
        backgroundColor: theme.palette.common.black,
        borderRadius:"6px",
        color: theme.palette.secondary.main,
        fontFamily:"Poppins-Regular",
        fontSize:"10px",
    },

    wrapper: {
        width: "100%",
        display: 'flex',
        justifyContent: 'space-between',
        gap: 60,
        [mq("xxs")]: {
          flexDirection: 'column',
        },
        [mq("md")]: {
          flexDirection: 'row',
          margin: '6.3rem',
        },
    },
}));
export default useStyles;