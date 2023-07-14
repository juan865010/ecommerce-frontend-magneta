import { makeStyles } from '@material-ui/core';
import { borderRadius } from '@mui/system';
import mq from '../../../config/mq';
const useStyles = makeStyles((theme) => ({
  box: {
    margin: "0 2rem 0 2rem",
    justifyContent: "center",
    display: "flex",
    [mq("xss")]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [mq("md")]: {
      flexDirection: 'row',
      alignItems: 'stretch',
    },
  },
  formContainer: {
    width: "100%",
    margin: "1rem",
    paddingBottom: "1rem ",
    border: "3px solid" + theme.palette.primary.light,
    borderRadius: '3px'
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 1.5rem 0 1.5rem ",
    gap: 25
  },

  title: {
    borderRadius: '5px',
    backgroundColor: theme.palette.primary.light,
    padding: "1rem 0 1rem 1rem",
    fontSize: "1.5rem ",
    marginTop: "-0.01rem",
    fontWeight: 'bold'
  },
  formSendDirection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [mq("xss")]: {
      width: '100%',
    },
    [mq("md")]: {
      width: '65%',
    },
  },
  formMark: {
    marginRight: '2rem',
    [mq("xss")]: {
      width: '100%',
    },
    [mq("md")]: {
      width: '35%',
    },
  },
  containerMarketing: {
    display: "flex",
    justifyContent: "center",
    padding: "0 1.5rem 0 1.5rem ",
    gap: 40
  }

}));
export default useStyles;
