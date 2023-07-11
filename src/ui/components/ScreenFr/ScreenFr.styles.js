import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    srnc: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    fontFamily:"Inter-Regular",
    width:'100%'
  },
  row:{
    display:"flex",
    height:'90vh',

  }
}));
export default useStyles;