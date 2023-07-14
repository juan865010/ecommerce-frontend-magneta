import { makeStyles } from "@material-ui/core";
import mq from "../../../../config/mq";
const useStyles = makeStyles((theme) => ({
 container: {
    flex: 0.6,
  },
  wrapper: {
    marginTop: '3rem',
    marginRight: '5rem',
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    [mq("xxs")]: {
      flexDirection: 'column',
      alignItems: "center"
    },
    [mq("md")]: {
      flexDirection: 'row',
    },
  },
  textContainer: {
    marginBottom: '3rem'
  }
}));
export default useStyles;
