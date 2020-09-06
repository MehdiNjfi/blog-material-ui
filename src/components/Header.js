import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    height: 800,
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('https://marketplace.canva.com/MABK3poo_Ys/1/screen_2x/canva-wooden-table-with-laptop--MABK3poo_Ys.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3em',
    fontWeight: '700',
    color: '#FFFFFF',
    [theme.breakpoints.down('sm')]: {
      height: 300,
      fontSize: '2em'
    }
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.header}>
        <Box>Material Ui Blog</Box>
      </Box>
    </React.Fragment>
  );
};

export default Header;
