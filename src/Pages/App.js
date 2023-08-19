import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../Style/App/App.css';
import Home from './Home';
import UserSign from './UserSign';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<UserSign />} />
      </Routes>
    </Router>

  );
}

export default App;
