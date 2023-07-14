import { makeStyles } from "@material-ui/core";
import mq from "../../../../config/mq";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: 'flex-end',
    alignContent: 'center',
    marginBottom: '-0.5rem',
    [mq("xxs")]: {
      paddingRight: '1rem',
    },
    [mq("md")]: {
      paddingRight: '12rem',
      
    },
  },
}));
export default useStyles;