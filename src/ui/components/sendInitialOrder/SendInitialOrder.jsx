import useStyles from "./sendInitialOrder.styles";
import OrderSend from "../infoFacSend/orderSend/OrderSend";
import OptDeli from "../sendInitialOrder/detFac/DetFac";
import BreadCrumb from "../infoFacSend/breadCrumb/BreadCrumb";

const SendInitialOrder = () => {
  const classes = useStyles();
  return (
    <>
      <BreadCrumb />
      <div className={classes.wrapper}>
        <OptDeli />
        <OrderSend />
      </div>
    </>
  );
};

export default SendInitialOrder;
