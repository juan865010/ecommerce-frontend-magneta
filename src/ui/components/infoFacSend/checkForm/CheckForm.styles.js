import { makeStyles } from "@material-ui/core";
import mq from "../../../../config/mq";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0.6,
    [mq("xxs")]: {
      width: '100%'
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  dataCardDebit: {
    display: 'flex',
    [mq("xxs")]: {
      width: "100%",
    },
  },
  radioContainer: {
    width: '100%',
    display: 'flex',
  },
  radio: {
    display: 'flex',
    alignItems: 'center',
  },
  iconCard: {
    [mq("xxs")]: {
      width: "100%",
    },
  },
  cardForm: {
    [mq("xxs")]: {
      width: "100%",
    },
  }

}));
export default useStyles;