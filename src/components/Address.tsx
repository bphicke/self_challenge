import { ConnectedProps, connect, useDispatch } from "react-redux";
import { Dispatch as ReduxDispatch } from "redux";
import { RootState } from "./redux/root";
import { createSelector } from "reselect";
import { FormControl, Box, Typography } from "@material-ui/core";
import { setAddress } from "./redux/address/addressActions";
import { StyledInput } from "./StyledInput";
import { StyledLabel } from "./StyledLabel";
import { makeStyles } from "@material-ui/styles";

type Props = ConnectedProps<typeof connector>;

const handleOnChange = (dispatch: ReduxDispatch) => (
  e: React.ChangeEvent<HTMLInputElement>,
) => {
  setAddress(dispatch, e.target.value);
};

const useStyles = makeStyles({
  fullWidth: {
    width: "100%",
  },
});

const AddressRoot = ({ address, displayError }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onChange = handleOnChange(dispatch);

  return (
    <FormControl className={classes.fullWidth}>
      <StyledLabel htmlFor="address" displayError={displayError}>
        ADDRESS
      </StyledLabel>
      <Box maxWidth="376px" width="100%" height="48px">
        <StyledInput
          id="address"
          value={address}
          onChange={onChange}
          displayError={displayError}
        />
      </Box>
    </FormControl>
  );
};

export const selectAddress = (state: RootState) => state.address;
export const getDisplayError = (
  testForValidation: boolean,
  inputString: string,
) => {
  return testForValidation && inputString.length === 0;
};

export const selectTestForValidation = (state: RootState) =>
  state.testForValidation;

const getAddress = createSelector(
  [selectAddress, selectTestForValidation],
  (address, testForValidation) => {
    return {
      address: address,
      displayError: getDisplayError(testForValidation, address),
    };
  },
);

const connector = connect(getAddress);

export const Address = connector(AddressRoot);
