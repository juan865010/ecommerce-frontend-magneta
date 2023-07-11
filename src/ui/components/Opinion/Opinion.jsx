import useStyles from "./Opinion.styles";
import Panel from "../Panel/Panel";
import {useContext} from "react";
import VerOp from "../VerOp/VerOp";
import { MyContext } from "../Contexto/MyContext";
const Opinion = () => {
  const classes = useStyles();
  const { detalle} =
    useContext(MyContext);
  return (
    <div className={classes.container}>
      {!detalle && <Panel></Panel>}
      {detalle && <VerOp></VerOp>}
    </div>
  );
};

export default Opinion;
