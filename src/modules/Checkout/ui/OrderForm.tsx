import { useSelector } from 'react-redux';
import { getSelectedSolarModules } from '../model/checkoutSelectors';
import { Button, Typography } from '@mui/material';
import { useMemo } from 'react';
import { queryFetcher } from '../../../utils/queryFetcher';
import { useAppDispatch } from '../../../app/hooks/useAppDispatch';
import { fetchSolarModulesError, fetchSolarModulesLoading, fetchSolarModulesSuccess } from '../../SolarModules/model/solarModulesActions';
import { getError } from '../../../utils/getError';
import { SolarModulesState } from '../../SolarModules/model/solarModulesReducer';
import { clearSelectedModules } from '../model/checkoutActions';

function OrderForm () {
  const selectedSolarModules = useSelector(getSelectedSolarModules);
  const dispatch = useAppDispatch();

  const totalPrice = useMemo(() => {
    return Object.values(selectedSolarModules).reduce((acc, moduleInfo) => {
      return acc + moduleInfo.price * moduleInfo.selectedQuantity;
    }, 0);
  }, [selectedSolarModules]);

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(fetchSolarModulesLoading());
      const serverSolarModules = await queryFetcher<SolarModulesState["solarModules"]>("/"); 
      const isAllShippingItemsInStock = 
        Object.entries(selectedSolarModules).every(([name, info]) => {
          const serverModule = serverSolarModules?.[name as keyof typeof serverSolarModules];
          return serverModule?.quantity && serverModule.quantity >= info.selectedQuantity;
        })

      if(isAllShippingItemsInStock) {
        dispatch(fetchSolarModulesSuccess(serverSolarModules));
        dispatch(clearSelectedModules());
        alert("The order was successfully completed");
      }
    } catch (e: unknown) {
      const error = getError(e);
      dispatch(fetchSolarModulesError(error));
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Typography variant='h5'>Order Details</Typography>
      <Typography sx={{mt: 3}}>Total price: {totalPrice}</Typography>
      <Button 
        variant='contained' 
        disabled={Object.keys(selectedSolarModules).length === 0}
        type='submit'
        sx={{mt:3}} 
        >
          Submit Order
      </Button>
    </form>
  );
};

export default OrderForm;