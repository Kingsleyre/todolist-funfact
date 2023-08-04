import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import FunFactPage from './pages/FunFactPage';
import HomePage from './pages/HomePage';
import TodoListPage from './pages/TodoListPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fun-fact" element={<FunFactPage />} />
      <Route path="/to-do-list" element={<TodoListPage />} />
    </Routes>
  );
}


function Home() {
  return(
    <>
    <FunFactPage/>
    </>
  );
}

export default App;
