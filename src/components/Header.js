import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    height: "800px",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('https://marketplace.canva.com/Asg8U/MAD1xqAsg8U/1/s2/canva-macbook-pro-on-brown-wooden-table-MAD1xqAsg8U.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3em',
    fontWeight: '700',
    color: '#FFFFFF'
  },
});

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
