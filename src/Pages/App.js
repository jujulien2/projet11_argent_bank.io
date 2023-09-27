import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../Style/App/App.css';
import Home from './Home';
import UserSign from './UserSign';
import UserPage from './UserPage';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<UserSign />} />
        <Route path="/user" element={< UserPage />} />
      </Routes>
    </Router>

  );
}

export default App;
