import './App.css';
import Login from './Components/Login';
import {Routes, Route} from 'react-router-dom';
import { Col, Container,Row } from 'react-bootstrap';
import Signup from './Components/Signup';
import { UserAuthContextProvider } from './Context/UserAuthContext';
import Home from './Components/Home';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
          <Route path="/home" 
          element={
            <ProtectedRoutes>
              <Home/>
            </ProtectedRoutes>
          }
          >
          </Route>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
          </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
