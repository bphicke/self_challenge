import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { createSelector } from "reselect";
import { selectFirstName } from "./FirstName";
import { selectLastName } from "./LastName";
import { selectAddress } from "./Address";
import { selectAddressTwo } from "./AddressTwo";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { Dispatch as ReduxDispatch } from "redux";
import { testForValidation } from "./redux/testForValidation/testForValidationActions";

const useStyles = makeStyles({
  button: {
    paddingLeft: "24px",
    paddingRight: "24px",
    backgroundColor: "#FFAB44",
    borderRadius: "6px",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "16px",
    textTransform: "none",
    height: "48px",
    width: "100%",
    minWidth: "100px",
  },
});

const handleOnClick = (
  validated: boolean,
  firstName: string,
  lastName: string,
  address: string,
  addressTwo: string,
  dispatch: ReduxDispatch,
) => () => {
  if (validated) {
    alert(
      `
      First Name: ${firstName}
      Last Name: ${lastName}
      Address: ${address}
      Address 2: ${addressTwo}
      `,
    );
  }
  testForValidation(dispatch);
};

type Props = ConnectedProps<typeof connector>;

export const NextButtonRoot = ({
  validated,
  firstName,
  lastName,
  address,
  addressTwo,
}: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onClick = handleOnClick(
    validated,
    firstName,
    lastName,
    address,
    addressTwo,
    dispatch,
  );
  return (
    <Button className={classes.button} onClick={onClick}>
      Next
      <Box pl={1}>
        <img
          src="/static/White_Arrow.svg"
          alt="right arrow"
          width="10px"
          height="10px"
        />
      </Box>
    </Button>
  );
};

const validateForm = createSelector(
  [selectFirstName, selectLastName, selectAddress, selectAddressTwo],
  (firstName, lastName, address, addressTwo) => {
    return {
      validated:
        firstName.length > 0 && lastName.length > 0 && address.length > 0,
      firstName,
      lastName,
      address,
      addressTwo,
    };
  },
);

const connector = connect(validateForm);

export const NextButton = connector(NextButtonRoot);
