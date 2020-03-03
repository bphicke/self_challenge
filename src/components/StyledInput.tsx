import { Box, Input, makeStyles, InputProps } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    fontSize: "14px",
    fontFamily: "Roboto",
  },
  inputOutlineFocus: {
    border: "1px solid #00ADEE",
    borderRadius: "6px",
  },
  inputOutline: {
    border: "1px solid #EAEAEA",
    backgroundColor: "#F7F7F7",
    borderRadius: "6px",
    "&:focus-within": {
      border: "1px solid #00ADEE",
      backgroundColor: "#FFFFFF",
      borderRadius: "6px",
    },
  },
  error: {
    border: "1px solid #E70000",
    backgroundColor: "#FFFFFF",
    borderRadius: "6px",
  },
  fillContainer: {
    width: "100%",
    height: "100%",
  },
});

type DisplayError = {
  displayError: boolean;
};

export const StyledInput = ({
  displayError,
  ...props
}: InputProps & DisplayError) => {
  const classes = useStyles();
  return (
    <Box
      p={2}
      className={`${classes.inputOutline} ${
        classes.fillContainer
      } ${displayError && classes.error}`}
    >
      <Input
        {...props}
        disableUnderline
        className={`${classes.input} ${classes.fillContainer}`}
      />
    </Box>
  );
};
