import { ConnectedProps, connect, useDispatch } from "react-redux";
import { Dispatch as ReduxDispatch } from "redux";
import { RootState } from "./redux/root";
import { createSelector } from "reselect";
import { FormControl, Box, makeStyles } from "@material-ui/core";
import { setFirstName } from "./redux/firstName/firstNameActions";
import { StyledInput } from "./StyledInput";
import { StyledLabel } from "./StyledLabel";
import { selectTestForValidation, getDisplayError } from "./Address";

type Props = ConnectedProps<typeof connector>;

const handleOnChange = (dispatch: ReduxDispatch) => (
  e: React.ChangeEvent<HTMLInputElement>,
) => {
  setFirstName(dispatch, e.target.value);
};

const useStyles = makeStyles({
  fullWidth: {
    width: "100%",
  },
});

const FirstNameRoot = ({ firstName, displayError }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onChange = handleOnChange(dispatch);

  return (
    <FormControl className={classes.fullWidth}>
      <StyledLabel htmlFor="first-name" displayError={displayError}>
        FIRST NAME
      </StyledLabel>
      <Box maxWidth="376px" width="100%" height="48px">
        <StyledInput
          id="first-name"
          value={firstName}
          onChange={onChange}
          displayError={displayError}
        />
      </Box>
    </FormControl>
  );
};

export const selectFirstName = (state: RootState) => state.firstName;

const getFirstName = createSelector(
  [selectFirstName, selectTestForValidation],
  (firstName, testForValidation) => {
    return {
      firstName: firstName,
      displayError: getDisplayError(testForValidation, firstName),
    };
  },
);

const connector = connect(getFirstName);

export const FirstName = connector(FirstNameRoot);
