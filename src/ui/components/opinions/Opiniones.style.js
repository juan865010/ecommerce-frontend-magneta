import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";
const useStyles = makeStyles((theme) => ({
    Container:{
        width: "912px",
        height: "673px",
        display: "flex",
        border:"1px solid #CDCDCD",
        borderRadius: "0.75rem",
        backgroundColor: theme.palette.primary.main,        
    },
    tableContainer: {
        width: "874px",
        marginTop: "22px",
        alignItems: "center",
        overflowX: "auto",
        borderRadius: "6px",
        gap: "22px",

    },

    tableHead:{
        borderRadius: "6px",
        backgroundColor: theme.palette.secondary.space,
        fontFamily:"Poppins-Regular",
    },
     text:{
        fontFamily:"Poppins-Regular",
        fontSize:"12px",
        fontWeight: 600,
        lineHeight: "18px",
        letterSpacing: "0.03em",
        textAlign: "left",

     },

    TableRow:{
        fontFamily:"Poppins-Regular",
        color: theme.palette.secondary.grayishBlue, 
        fontFamily: "Poppins",

    },

    buton:{
        justifyContent:"center",
        alignItems:"center",
        padding:"5px, 12px",
        backgroundColor: theme.palette.common.black,
        borderRadius:"6px",
        color: theme.palette.secondary.main,
        fontFamily:"Poppins-Regular",
        fontSize:"10px",
        gap: "41px",
        
        fontFamily: "Poppins",
        fontSize: "10px",
        fontWeight: "700",
        lineHeight: "15px",
        letterSpacing: "0.03em",
        textAlign: "left",


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
        },
    },
}));
export default useStyles;