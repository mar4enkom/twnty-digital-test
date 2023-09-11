import styled from '@emotion/styled';
import { Card, CardHeader, CardContent, Typography, Button, Box } from '@mui/material';
import { memo } from 'react';

interface SolarModuleCardProps {
    name: string;
    price: number;
    quantityInStock: number;
    selectedQuantity: number;
    onQuantityUp: () => void;
    onQuantityDown: () => void;
};

const CountButton = styled(Button)({
    padding: 0,
    minWidth: "25px"
})

function SolarModuleCartCard({ name, price, quantityInStock, selectedQuantity, onQuantityDown, onQuantityUp }: SolarModuleCardProps) {
    return (
        <Card key={name} variant="outlined" sx={{ mb: 2, minWidth: 200, flex: 1 }}>
            <CardHeader title={name} sx={{ pb: 0, textTransform: "capitalize" }} />
            <CardContent>
                <Typography variant="body1">
                    Price: {price}
                </Typography>
                <Typography variant="body1">
                    In stock: {quantityInStock}
                </Typography>
                <Box display="flex" alignItems="center" columnGap={1.5}>
                    <Typography variant="body1">Selected: </Typography>
                    <CountButton onClick={onQuantityDown} variant="outlined" color="primary">
                        -
                    </CountButton>
                    <Typography variant="body1">{selectedQuantity}</Typography>
                    <CountButton onClick={onQuantityUp} disabled={quantityInStock === selectedQuantity} variant="outlined" color="primary">
                        +
                    </CountButton>   
                </Box>
                <Typography variant="body1">
                    Total cost: {price * selectedQuantity}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default memo(SolarModuleCartCard);
