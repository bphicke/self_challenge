import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Box, useMediaQuery } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
  info: {
    backgroundColor: "#585858",
    color: "#FFFFFF",
    height: "100%",
    paddingTop: "32px",
    paddingBottom: "32px",
  },
  input: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    paddingTop: "32px",
    paddingLeft: "24px",
  },
  header: {
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "16px",
  },
  desktopText: {
    fontSize: "32px",
  },
  subHeader: {
    color: "#EAEAEA",
    fontSize: "14px",
    fontFamily: "Merriweather",
  },
  fullHeight: {
    height: "100%",
  },
});

const Layout = (props: any) => {
  const classes = useStyles();
  const breakpoints = createBreakpoints({});
  const matches = useMediaQuery(breakpoints.up("sm"));

  return (
    <Box className={classes.container}>
      <Grid container className={classes.fullHeight}>
        <Grid container item xs direction="column">
          <Grid container item className={classes.info} xs>
            <Grid container item sm={12} xs direction="column">
              <Grid container item justify="flex-end">
                <Box
                  ml={3}
                  mr={3}
                  maxWidth="535px"
                  minWidth="250px"
                  width="100%"
                >
                  <Grid container item direction="column">
                    <Grid item component="h1">
                      <Box mb={4}>
                        <img
                          src="/static/GiantRobotLTD_Logo.svg"
                          alt="Giant Robot Logo"
                          height="26px"
                          width="177px"
                        />
                      </Box>
                    </Grid>
                    <Grid item>
                      <Typography
                        component="h2"
                        className={`${classes.header} ${matches &&
                          classes.desktopText}`}
                      >
                        Welcome
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component="h3" className={classes.subHeader}>
                        Please tell us a bit about yourself to get started
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item className={classes.input} xs>
          {props.children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
