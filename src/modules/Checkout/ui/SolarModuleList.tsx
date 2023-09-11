import { useCallback, useEffect } from 'react';
import { fetchSolarModules } from '../../SolarModules/model/solarModulesActions';
import { getSolarModules } from '../../SolarModules/model/solarModulesSelectors';
import { useAppDispatch } from '../../../app/hooks/useAppDispatch';
import { CircularProgress, Card, CardContent, Typography, Box } from '@mui/material';
import { SelectModulePayload, selectModule } from '../model/checkoutActions';
import SolarModuleCard from './SolarModuleCard';
import { getSelectedSolarModules } from '../model/checkoutSelectors';
import { useSelector } from 'react-redux';

function SolarModuleList() {
  const dispatch = useAppDispatch();
  const { solarModules, loading, error } = useSelector(getSolarModules);
  const selectedSolarModules = useSelector(getSelectedSolarModules);

  useEffect(() => {
    dispatch(fetchSolarModules());
  }, [dispatch]);

  const handleSelectSolarModule = useCallback((solarModule: SelectModulePayload) => {
    dispatch(selectModule(solarModule))
  }, [dispatch])

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" color="error">
            Error: {error.message}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  if (!solarModules) {
    return (
      <div>No data</div>
    )
  }

  return (
    <Box>
      <Box display="flex" flexWrap="wrap" columnGap={2}>
        {Object.entries(solarModules).map(([name, { price, quantity }]) => (
          <SolarModuleCard 
            key={name}
            name={name} 
            price={price} 
            quantityInStock={quantity} 
            disabled={quantity === 0 || selectedSolarModules?.[name]?.selectedQuantity >= quantity}
            onSelect={() => handleSelectSolarModule({name, price, quantity})} 
          />
        ))}
      </Box>
    </Box>
  );
}

export default SolarModuleList;
