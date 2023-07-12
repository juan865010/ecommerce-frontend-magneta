import "./sidebar.css";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboard, faUsers, faTags, faCommentAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useContext } from "react";
import styled from "@emotion/styled";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
          <span className="logo">Mi Logo</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <FontAwesomeIcon icon={faHome}/>
              <span id="spansider">Inicio</span>
            </Link>
          </li>
          <li>
            <Link to="/pedidos" style={{ textDecoration: "none", color: "black" }}>
              <FontAwesomeIcon icon={faClipboard} />
              <span id="spansider">Pedidos</span>
            </Link>
          </li>
          <li>
            <Link to="/client" style={{ textDecoration: "none", color: "black" }}>
              <FontAwesomeIcon icon={faUsers} />
              <span id="spansider">Clientes</span>
            </Link>
          </li>
          <li>
            <Link to="/promociones" style={{ textDecoration: "none", color: "black" }}>
              <FontAwesomeIcon icon={faTags} />
              <span id="spansider">Promociones</span>
            </Link>
          </li>
          <li>
            <Link to="/comentario-opiniones" style={{ textDecoration: "none", color: "black" }}>
              <FontAwesomeIcon icon={faCommentAlt} />
              <span id="spansider">Opiniones</span>
            </Link>
          </li>
          <li>
            <Link to="/configuracion" style={{ textDecoration: "none", color: "black", fontSize: "25px" }}>
              <FontAwesomeIcon icon={faCog} />
              <span id="spansider">Configuracion</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
