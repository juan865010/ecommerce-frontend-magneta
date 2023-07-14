import useStyles from './InfoFacSend.styles';
import OrderSend from './orderSend/OrderSend';
import CheckForm from './checkForm/CheckForm';
import BreadCrumb from './breadCrumb/BreadCrumb';

const InfoFacSend = () => {
  const classes = useStyles();
  return (
    <>
      <BreadCrumb/>
      <div className={classes.wrapper}>
        <CheckForm />
        <OrderSend />
      </div>
    </>
  );
};

export default InfoFacSend;
