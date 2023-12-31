import { lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./components/Home'));
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
