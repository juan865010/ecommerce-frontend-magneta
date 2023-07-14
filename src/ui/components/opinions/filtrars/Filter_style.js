import { makeStyles } from '@material-ui/core';
import mq from '../../../../config/mq';

const useStyles = makeStyles((theme) => ({
    container:{
        width:'240px',
    },
    hrLine:{
        width:'194px',
        height:'1px',
    },
    hrDate:{
        width:'194px',
        height:'1px',
        marginTop:'16px',
    },
    hrMaterials:{
        width:'194px',
        height:'1px',
        marginTop:'20.5px',
    },
    boxTitleFilter:{
        marginTop:'7px',
        marginRigth:'27px',
        marginLeft:'19px',
        width:'194px',
        height:'31px',
        display:'flex',
    },
    textTitle:{
        width:'194px',
        marginTop:'10px',
        marginRigth:'60px',
        marginBlock:'0.5px',
        justifyContent:'center',
        fontSize:'24px',
        fontWeight:600,
        fontFamily:'Quicksand-Regular',
        lineHeight:'24px',
        lineWeight:600,
        letterSpacing:'0.44px',
        color:'#000000',
        // display:'flex',
    },
    icons:{
        width:"21.33px",
        height:"19.33px",
        marginLeft:'5px',
        marginTop:'5px',
        marginBock:'2.5px',
        marginRigth:'35px',
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
        height:'1.44px',
        width: '166px',
        fontSize:'15px',
        marginTop:'16px',
        marginLeft:'32px',
        maxHeight:'60px',
        color:'#000',
    },
    Boxs:{
        backgroundColor:'#D9D9D9',
        height:'5px',   
    },
    LetrasFecha:{
        marginTop:'12px',
        color: '#54595E',
        fontFamily: 'Inter-Regular',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '20px',
    },
    boxFecha:{
        width:'187px',
        height:'61px',
        // background:'blue',
    },
    boxCalendar:{
        display:'flex',
        height:'34px',
        width:'187px',
        marginTop:'7px',
        borderRadius:'5px',
        border:'1px solid #54595E',
    },
    IconCalendar:{
        marginLeft:'7px',
        marginTop:'5px',
        marginBlock:'7px',
        color:'#54595E',
    },
    IconClose:{
        marginTop:'5px',
        marginBlock:'7px',
        color:'#54595E',
    },
    icon:{
        width:'8.57px',
        height:'4.29px',
        color: "white",
        marginLeft:'10px',
        marginBlock:'10px',
    },
    IconCalendario:{
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
        marginTop:'7px',
        marginLeft:'0px',
        marginBlock:'7px',
        color: '#999',
        fontFamily: 'Inter-Regular',
        fontSize: '10px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '18px',
    },
    todoMaterial:{
        width:'85px',
        height:'189px',
        marginTop:'16px',
    },
    todoMaterialTitle:{
        width:'64px',
        height:'19px',
        color: '#54595E',
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
    },
    todoComponents:{
        width:'187px',
        height:'502px',
        marginTop:'8px',
        marginLeft:'32px',
        marginRigth:'21px',
    },
    titleOpcionesCategori:{
        width:'76px',
        height:'19px',
        fontFamily:'Inter-Regular',
        fontSize:'16px',
        fontStyle:'normal',
        fontWeight:600,
        lineHeight:'normal',
        color: '#54595E',
    },
    boxMaterial:{
        height:'auto',
        width:'auto',
        marginBlock:'16px',
    },
    opcionesMaterialtexto1:{
        width:'auto',
        height:'17px',
        marginBlock:'16px',
        padding:'0px',
        color: '#000', 
        fontFamily: 'Inter-Regular',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    },
    opcionesMaterialtexto2:{
        width:'auto',
        height:'17px',
        marginBlock:'16px',
        padding:'0px',
        color: '#6C757D',
        fontFamily: 'Inter-Regular',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    },
    opcionesMaterialtexto3:{
        width:'auto',
        height:'17px',
        padding:'0px',
        color: '#6C757D',
        fontFamily: 'Inter-Regular',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        marginBlock: '22.5px',
    },
    boxCategoria:{
        height:'auto',
        width:'auto',
        marginBlock:'16px',
    },
    
    opcionesCategoritexto1:{
        height:'auto',
        width:'auto',
        marginTop:'16px',
        color: '#000',
        fontFamily:'Inter-Regular',
        fontSize:'14px',
        fontStyle:'normal',
        fontWeight:500,
        lineHeight:'normal',
    },
    opcionesCategoritexto2:{
        height:'auto',
        width:'auto',
        marginTop:'16px',
        color: '#000',
        fontFamily:'Inter-Regular',
        fontSize:'14px',
        fontStyle:'normal',
        fontWeight:500,
        lineHeight:'normal',
    },
    opcionesCategoritexto3:{
        height:'auto',
        width:'auto',
        marginTop:'20.5px',
        color: '#000',
        fontFamily:'Inter-Regular',
        fontSize:'14px',
        fontStyle:'normal',
        fontWeight:500,
        lineHeight:'normal',
    },
    fechasBox:{
        width:'187px',
        height:'34px',
        border:'1px solid #54595E',
        background:'red',
    },
    textCantidad:{
        height:'19px',
        width:'71px',
        marginTop:'12px',
        marginBlock:'16px',
        color: '#54595E',
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
    },
}));
export default useStyles;