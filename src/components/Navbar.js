import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    appBar : {
        backgroundColor: "#FFFFFF",
        position: "sticky"
    }
})

const Navbar = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography color="primary">Blog</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
