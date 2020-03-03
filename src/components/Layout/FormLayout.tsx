import { Grid, Box } from "@material-ui/core";
import { FirstName } from "../FirstName";
import { LastName } from "../LastName";
import { Address } from "../Address";
import { AddressTwo } from "../AddressTwo";
import { NextButton } from "../NextButton";

export const FormLayout = () => {
  return (
    <Grid container item xs direction="column" spacing={3}>
      <Grid item container>
        <Grid xs={12} sm>
          <FirstName />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid xs={12} sm>
          <LastName />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid xs={12} sm>
          <Address />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid xs={12} sm>
          <AddressTwo />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid xs={12} sm={1}>
          <Box mt={3} width="100%">
            <NextButton />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
