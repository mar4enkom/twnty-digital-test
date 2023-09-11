import { getSelectedSolarModules } from '../model/checkoutSelectors';
import { Typography } from '@mui/material';
import SolarModuleCartCard from './SolarModuleCartCard';
import { useAppDispatch } from '../../../app/hooks/useAppDispatch';
import { useCallback } from 'react';
import { decrementQuantity, incrementQuantity } from '../model/checkoutActions';
import { useAppSelector } from '../../../app/hooks/useAppSelector';

function SelectedSolarModules () {
  const selectedSolarModules = useAppSelector(getSelectedSolarModules);
  const dispatch = useAppDispatch();

  const onQuantityUp = useCallback((name: string) => {
    dispatch(incrementQuantity({ name }));
  }, [dispatch]);

  const onQuantityDown = useCallback((name: string) => {
    dispatch(decrementQuantity({ name}));
  }, [dispatch]);

  return (
    <div>
      <Typography variant='h5'>Selected Solar Modules</Typography>
      <div>
        {Object.entries(selectedSolarModules).map(([name, {price, quantity, selectedQuantity}]) => (
          <SolarModuleCartCard 
            key={name} 
            name={name} 
            price={price} 
            quantityInStock={quantity} 
            selectedQuantity={selectedQuantity}
            onQuantityDown={() => onQuantityDown(name)}
            onQuantityUp={() => onQuantityUp(name)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedSolarModules;