import useStyles from "../ScreenFr/ScreenFr.styles";
import NavMenu from "../navMenu/NavMenu";
import HeaderFrasier from "../HeaderFrasier/HeaderFrasier";
import Opinion from "../Opinion/Opinion";
const ScreenFr = () => {
  
  const classes = useStyles();
  return (
    <div className={classes.srnc}>
      <HeaderFrasier />
      <div className={classes.row}>
        <NavMenu />
        <Opinion></Opinion>
      </div>
    </div>
  );
};

export default ScreenFr;
