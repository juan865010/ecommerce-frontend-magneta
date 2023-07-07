import { makeStyles} from "@material-ui/core";
import mq from "../../../../config/mq";
const useStyles = makeStyles((theme) => ({
container: {
    width: "15rem",
    height: "42rem",
    Left: "0rem",
    borderRadius: "0.6rem",
    border:"1px solid #CDCDCD",
    display:"flex",
    flexDirection:"column",
    
  },
  title:{
    width:"12rem",
    paddingTop:"7px",
    marginLeft:"1.18rem",
  },

  filter:{
    width:"187px",
    height:"502px",
    alignItems:"center",
    marginLeft:"1rem",
    left:"2rem",
    gap:"32px",
  }
  
}));

export default useStyles;
