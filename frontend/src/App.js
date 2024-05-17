import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Books from './screens/Books';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={
          <Books/>
        } />
      </Routes>
    </Router>
    </>
  );
}

export default App;