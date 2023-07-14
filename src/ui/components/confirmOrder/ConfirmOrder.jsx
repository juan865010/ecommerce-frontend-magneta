import useStyles from './confirmOrder.styles';
import OrderSend from '../infoFacSend/orderSend/OrderSend';
import Confirm from './confirm/Confirm';
import BreadCrumb from "../infoFacSend/breadCrumb/BreadCrumb";

const ConfirmOrder = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Confirm />
        <OrderSend />
      </div>
    </>
  );
};

export default ConfirmOrder;
