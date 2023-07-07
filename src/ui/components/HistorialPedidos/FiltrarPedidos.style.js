import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

const useStyles = makeStyles((theme) => ({
    container:{
        width:'100%',
        padding:'20px 0px 0px 19px',
    },
    hr:{
        width:'197px'
    },
    title:{
        width:'134px',
        height:'31.5px',
    },
    textoTitle:{
        fontSize:'24px',
        lineHeight:'24px',
        lineWeight:600,
        letterSpacing:0.44,
        color:'#000000',
    },
    icons:{
        width:"21.33px",
        height:"19.33px",
        padding:'0.67px 0px 0px 4.5px',
    },
    checkBoxIcons:{
        color:'red',
        backgroundColor:'blue',
    },
    boxSlider:{
        width:'165.11px',
        height:'15px',
    },
    Boxsliders:{
        backgroundColor:'#D9D9D9',
        height:'1.44px',
        fontSize:'15px',
        maxHeight:'60px',
        color:'#000000',
        padding:'50.9px 0px 0px 0px',
        '.MuiSlider-track':{
            backgroundColor:'red',
            fontSize:'10px',
        },
    },
    Boxs:{
        backgroundColor:'#D9D9D9',
        height:'5px',   
    },
    LetrasFecha:{
    
        padding:'12px 0px 7px 13px'
    },
    BoxFecha:{
        height:'8px',
        background:'blue',
    },
    boxCalendar:{
        display:'flex',
    
        height:'34px',
        width:'187px',
        marginTop:'0px',
        marginLeft:'10px',
        padding:'5px 2px 10px 10px',
        borderRadius:'5px',
        border:'1px solid #54595E',
    },
    icon:{
        background:'blue',
        width:'8.57px',
        height:'4.29px',
        color: "white",
        marginLeft:'10px',
        marginBlock:'10px',
    },
    IconCalendario:{
        background:'pink',
        maxWidth:'18px',
        minWidth:'18px',
        height:'0px',
        width:'0x',
        marginTop:'0px',
        marginBlock:'10px',
        '.MuiBottomNavigation-root': {
            color: "#007A78",
            heigth:"18px"
        },
    },
    IconSelect:{
        background:'pink',
        color:'black',
        width:'20px',
        height:'20px',
        padding:'0px 0px 25px 10px',
        marginTop:'0px',
        marginBlock:'5px',
        ".MuiBottomNavigationAction-root": {
            color: "#007A78",
            heigth:"18px"
        },
    },
    boxLetras:{
        width:'133px',
        height:'18px',
        fontWeight:'400px',
        fontSize:'11px',
        lineHeight:'18px',
        textAlign:'center',
    },
    IconCalendar:{
        height:'18px',
        width:'18px',
        '.MuiBottomNavigationAction-root': {
            color: "#007A78",
            heigth:"1px"
        },
    },
}));
export default useStyles;