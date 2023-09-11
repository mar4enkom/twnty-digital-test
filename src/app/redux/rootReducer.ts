import { CheckoutState, checkoutReducer } from "../../modules/Checkout/model/checkoutReducer";
import { SolarModulesState, solarModulesReducer } from "../../modules/SolarModules/model/solarModulesReducer";

export interface RootState {
    solarModules: SolarModulesState;
    selectedModule: CheckoutState;
  }

const rootReducer = (state: RootState, action: any) => {
  return ({
    solarModules: solarModulesReducer(state?.solarModules, action, state),
    selectedModule: checkoutReducer(state?.selectedModule, action, state),
  });
}  

export default rootReducer;
