import {Route, Routes} from 'react-router-dom'
import AuthPage from '../pages/Auth/AuthPage';
import Home from '../pages/HomePages/Home';
import { BrowserRouter as Router } from 'react-router-dom'




const Road = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default Road