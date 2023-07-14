import useStyles from './VerOp.Styles.js';
import { useContext } from "react";
import InfoProd from "../InfoProd/InfoProd.jsx";
import InfoComent from "../InfoComent/InfoComent.jsx";
import { MyContext } from "../Contexto/MyContext.js";
import EditComent from "../EditComent/EditComent.jsx";
const VerOp = () => {
  
  const { editar} = useContext(MyContext);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <InfoProd></InfoProd>
      {!editar &&<InfoComent></InfoComent> }
      {editar &&<EditComent></EditComent> }
      
    </div>
  );
};

export default VerOp;