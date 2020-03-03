import { ConnectedProps, connect, useDispatch } from "react-redux";
import { Dispatch as ReduxDispatch } from "redux";
import { RootState } from "./redux/root";
import { createSelector } from "reselect";
import { FormControl, Box, makeStyles } from "@material-ui/core";
import { setAddressTwo } from "./redux/addressTwo/addressTwoActions";
import { StyledInput } from "./StyledInput";
import { StyledLabel } from "./StyledLabel";

type Props = ConnectedProps<typeof connector>;

const handleOnChange = (dispatch: ReduxDispatch) => (
  e: React.ChangeEvent<HTMLInputElement>,
) => {
  setAddressTwo(dispatch, e.target.value);
};

const useStyles = makeStyles({
  fullWidth: {
    width: "100%",
  },
});

const AddressTwoRoot = ({ addressTwo }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onChange = handleOnChange(dispatch);

  return (
    <FormControl className={classes.fullWidth}>
      <StyledLabel htmlFor="address-two" displayError={false}>
        ADDRESS 2 (OPTIONAL)
      </StyledLabel>
      <Box maxWidth="376px" width="100%" height="48px">
        <StyledInput
          id="address-two"
          value={addressTwo}
          onChange={onChange}
          displayError={false}
        />
      </Box>
    </FormControl>
  );
};

export const selectAddressTwo = (state: RootState) => state.addressTwo;

const getAddressTwo = createSelector([selectAddressTwo], addressTwo => {
  return { addressTwo: addressTwo };
});

const connector = connect(getAddressTwo);

export const AddressTwo = connector(AddressTwoRoot);
