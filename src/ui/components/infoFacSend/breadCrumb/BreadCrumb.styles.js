import { makeStyles } from "@material-ui/core";
import mq from "../../../../config/mq";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: 'flex-end',
    alignContent: 'center',
    marginBottom: '-0.5rem',
    width: '100%',
    paddingRight: '2rem',
  },
  breadcrumbContainer: {
    display: "flex",
    justifyContent: 'flex-end',
    [mq("xxs")]: {
      width: '100%'
    },
    [mq("md")]: {
      width: '65%'
    },
  },
  breadcrumb: {
    display: 'flex',
    justifyContent: 'center',
    [mq("xxs")]: {
      width: '5rem'
    },
    [mq("md")]: {
      width: '8.5rem'
    },
  }
}));
export default useStyles;