import { Card, CardHeader, CardContent, Typography, Button } from '@mui/material';
import { memo } from 'react';

interface SolarModuleCardProps {
    name: string;
    price: number;
    quantityInStock: number;
    onSelect: () => void;
    disabled: boolean;
};

function SolarModuleCard({ name, price, quantityInStock, onSelect, disabled }: SolarModuleCardProps) {
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
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={onSelect}
                    sx={{ mt: 2 }}
                    disabled={disabled}
                >
                    Select
                </Button>
            </CardContent>
        </Card>
    );
};

export default memo(SolarModuleCard);
