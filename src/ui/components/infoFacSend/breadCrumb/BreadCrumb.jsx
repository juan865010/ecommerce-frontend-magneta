import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useStyles from './BreadCrumb.styles';
const BreadCrumb = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Breadcrumbs
        className={classes.breadcrumbContainer}
        separator={
          <div className={classes.breadcrumb}>
            <HorizontalRuleIcon fontSize="small" />
            <CheckCircleIcon fontSize="small" />
            <HorizontalRuleIcon fontSize="small" />
          </div>
        }
        aria-label="breadcrumb"
      >
        <Link underline="hover" key="1" color="inherit" href="/">
          Envio
        </Link>
        <Link underline="hover" key="1" color="inherit" href="/">
          Entrega
        </Link>
        <Link underline="hover" key="1" color="inherit" href="/">
          Pago
        </Link>
      </Breadcrumbs>
    </div>

  );
};

export default BreadCrumb;
