import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
export const ENDPOINT = "http://localhost:4000"

interface MyFormProps {
	onDataChange: (data: any) => void;
}

const MyForm: React.FC<MyFormProps> = ({ onDataChange }) => {
    const [modifier, setModifier] = useState<number | String>('');
    const [dc, setDc] = useState<number | String>('');
	const [data, setData] = useState<any>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const url = `${ENDPOINT}/api/pathfinder2e/v1/distribution?modifier=${modifier}&dc=${dc}`;
		
		fetch(url)
			.then(response => response.json())
			.then(data => {
				setData(data);
				onDataChange(data); 
			  })
			.catch(error => console.error(error));
    };

    return (
        <Box sx={{ width: '50%', padding: '20px', float: 'left' }}>
            <form onSubmit={handleSubmit}>
                <Typography variant="h6" >Modifier <span style={{ color: 'red' }}>*</span></Typography>
                <TextField 
                    type="number" 
                    value={modifier} 
                    placeholder="Enter a number" 
                    onChange={(event) => setModifier(event.target.value)} 
                    fullWidth 
                    margin='normal'/>
				<Typography variant="h6" >Difficulty Class (DC) <span style={{ color: 'red' }}>*</span></Typography>
				<TextField 
					type="number" 
					value={dc} 
					placeholder="Enter a number" 
					onChange={(event) => setDc(event.target.value)} 
					fullWidth 
					margin='normal'/>
				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>
            </form>
        </Box>
	);
};

export default MyForm;