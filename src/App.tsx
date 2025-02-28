import { useState } from 'react';
import { Container, Box } from '@mui/material';
import ResultCard from './components/ResultCard';
import MyForm from './components/MyForm';

export interface CheckRequest {
  modifier: number,
  dc: number
}

export interface DegreesOfSuccess {
  critical_failures: number;
  failures: number;
  successes: number;
  critical_successes: number;
}

function App() {
  const [data, setData] = useState<DegreesOfSuccess | null>(null);

  const handleDataChange = (data: DegreesOfSuccess) => {
    setData(data);
  };

  return (
    <Container>
      <Box sx={{ padding: 2}}>
        <MyForm onDataChange={handleDataChange}/>
      </Box>
      <Box>
        {data && <ResultCard data={data} />}
      </Box>
    </Container>
  )
}

export default App