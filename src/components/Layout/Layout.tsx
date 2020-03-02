import { makeStyles } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    minHeight: "100%",
    height: "auto",
    position: "relative",
  },
  bodyContainer: {
    width: "100%",
    height: "100%",
  },
  body: {
    color: "black",
    backgroundColor: "#DADFE4",
    fontFamily: "Roboto Mono",
    minHeight: "100vh",
    height: "auto",
  },
});

const Layout = (props: any) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Typography
          variant="h5"
          component="div"
          className={classes.bodyContainer}
        >
          <Box className={classes.body}>{props.children}</Box>
        </Typography>
      </div>
    </>
  );
};

export default Layout;
