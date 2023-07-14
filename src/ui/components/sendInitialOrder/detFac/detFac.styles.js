import { makeStyles } from "@material-ui/core";
import mq from "../../../../config/mq";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0.6,
    gap: 15,
    [mq("xxs")]: {
      padding: '1rem'
    },
  },
}));
export default useStyles;
