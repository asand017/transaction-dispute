import { Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
        </Routes>
    </Container>
  );
}

export default App;
