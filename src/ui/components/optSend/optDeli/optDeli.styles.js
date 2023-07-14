import { makeStyles } from "@material-ui/core";
import mq from "../../../../config/mq";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flex: 0.5,
    flexDirection: 'column',
    width: '90%',
    [mq("xxs")]: {
      alignItems: 'center',
      marginLeft: '1rem'
    },
    [mq("md")]: {
      alignItems: 'normal'
    },
  },
  radio: {
    display: 'flex',
    alignItems: "center",
    gap: 6
  },
  containerRadio: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem'
  },
  hr: {
    width: '100%',
   },

}));
export default useStyles;
