import { makeStyles } from "@material-ui/core";
import mq from "../../../../config/mq";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: 'column',
    flex: 0.4,
    marginRight: '5rem',
    [mq("xxs")]: {
      width: '100%',
    },
  },
  
  containerData: {
    display: "flex",
    justifyContent: 'space-between',
    margin: '1.3rem 0 1.3rem 0',
    padding: '0 1.3rem 0 1.3rem ',
  },
  card: {
    padding: '100px',
    padding: '0 1.3rem 0 1.3rem ',
    backgroundColor: '#EFEFEF',
    flexDirection: 'row',
  },
   hr: {
    padding: '0 1.3rem 0 1.3rem ',
   },

   button: {
    backgroundColor: 'black',
    color: 'white',
    width: '100%',
    padding: '0.8rem'
   }
}));
export default useStyles;