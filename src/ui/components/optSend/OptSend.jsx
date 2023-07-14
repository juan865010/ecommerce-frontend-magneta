import useStyles from "./optSend.styles";
import OrderSend from "../infoFacSend/orderSend/OrderSend";
import OptDeli from "../optSend/optDeli/OptDeli";
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
