import { ConnectedProps, connect, useDispatch } from "react-redux";
import { Dispatch as ReduxDispatch } from "redux";
import { RootState } from "./redux/root";
import { createSelector } from "reselect";
import { FormControl, Box, makeStyles } from "@material-ui/core";
import { setLastName } from "./redux/lastName/lastNameActions";
import { StyledInput } from "./StyledInput";
import { StyledLabel } from "./StyledLabel";
import { selectTestForValidation, getDisplayError } from "./Address";

type Props = ConnectedProps<typeof connector>;

const handleOnChange = (dispatch: ReduxDispatch) => (
  e: React.ChangeEvent<HTMLInputElement>,
) => {
  setLastName(dispatch, e.target.value);
};

const useStyles = makeStyles({
  fullWidth: {
    width: "100%",
  },
});

const LastNameRoot = ({ lastName, displayError }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onChange = handleOnChange(dispatch);

  return (
    <FormControl className={classes.fullWidth}>
      <StyledLabel htmlFor="last-name" displayError={displayError}>
        LAST NAME
      </StyledLabel>
      <Box maxWidth="376px" width="100%" height="48px">
        <StyledInput
          id="last-name"
          value={lastName}
          onChange={onChange}
          displayError={displayError}
        />
      </Box>
    </FormControl>
  );
};

export const selectLastName = (state: RootState) => state.lastName;

const getLastName = createSelector(
  [selectLastName, selectTestForValidation],
  (lastName, testForValidation) => {
    return {
      lastName: lastName,
      displayError: getDisplayError(testForValidation, lastName),
    };
  },
);

const connector = connect(getLastName);

export const LastName = connector(LastNameRoot);
