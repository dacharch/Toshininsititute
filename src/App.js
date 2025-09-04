import Home from './components/Home/Home';
import Services from './components/Services/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceDetail from './components/ServicePages/ServiceDetail';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
