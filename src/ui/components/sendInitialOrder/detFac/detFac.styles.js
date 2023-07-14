import { makeStyles } from "@material-ui/core";
import mq from "../../../../config/mq";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0.6,
    gap: 25,
    [mq("xxs")]: {
      padding: '1rem'
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textName: {
    flex: 0.45
  }
}));
export default useStyles;
