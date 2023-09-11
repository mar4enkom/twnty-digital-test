import { Box, Typography } from "@mui/material";
import OrderForm from "./OrderForm";
import SolarModuleList from "./SolarModuleList";
import SelectedSolarModules from "./SelectedSolarModules";

function CheckoutPage () {
  return (
    <div>
      <Typography variant="h3" mt={4}>Solar Module Checkout</Typography>
      <hr />
      <Box display="flex" columnGap={3} pt={3}>
        <Box flex={3}>
          <SolarModuleList />
        </Box>
        <Box flex={2} display="flex" flexDirection="column" rowGap={5}>
          <OrderForm />
          <SelectedSolarModules /> 
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutPage;
