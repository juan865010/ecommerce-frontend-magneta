import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";
const useStyles = makeStyles((theme) => ({
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
      margin: '3rem',
    },
  },
}));
export default useStyles;
