import { Routes, Route } from 'react-router-dom';
import './App.css';
import Help from './pages/help/Help';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Help />}/>
        <Route path='login' />
      </Route>
    </Routes>
  );
}

export default App;
