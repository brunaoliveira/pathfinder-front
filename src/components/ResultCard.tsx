import React from 'react';
import { DegreesOfSuccess }  from '../App';
import { Card, CardContent, Typography, Grid2 } from '@mui/material';

interface DataProps {
    data: DegreesOfSuccess;
}

const ResultCard: React.FC<DataProps> = ({ data }:  DataProps) => {
	return (
        <Card style={{ margin: '20px', padding: '20px' }}>
            <CardContent>
                <Typography variant="h4" component="div">
                    Degrees of Success 
                </Typography>
                <Grid2 container spacing={2} style={{ marginTop: '10px' }}>
                    <Grid2 container direction="row" size={12}>
                        <Typography variant="h5" component="div">
                            Critical Failures: {data.critical_failures}
                        </Typography>
					</Grid2>
					<Grid2 container direction="row" size={12}>
						<Typography variant="h5" component="div">
							Failures: {data.failures}
						</Typography>
					</Grid2>
					<Grid2 container direction="row" size={12}>
						<Typography variant="h5" component="div">
							Successes: {data.successes}
						</Typography>
					</Grid2>
					<Grid2 container direction="row" size={12}>
						<Typography variant="h5" component="div">
							Critical Successes: {data.critical_successes}
						</Typography>
					</Grid2>
				</Grid2>
            </CardContent>
        </Card>
    );
};

export default ResultCard;