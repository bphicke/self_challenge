import {
  makeStyles,
  InputLabelProps,
  Box,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    fontFamily: "Merriweather",
    fontSize: "12px",
    color: "#666666",
  },
  error: {
    color: "#E70000",
    fontFamily: "Merriweather",
    fontSize: "12px",
  },
});

type DisplayError = {
  displayError: boolean;
};

export const StyledLabel: React.FC<InputLabelProps & DisplayError> = ({
  children,
  displayError,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Box pb={1} display="flex">
      <label {...props}>
        <Typography className={classes.label}>{children}</Typography>
      </label>
      {displayError && (
        <Box ml={1}>
          <Typography className={classes.error}>REQUIRED</Typography>
        </Box>
      )}
    </Box>
  );
};
