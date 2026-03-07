import './App.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container fluid className="contenedor">
      <Row>
        <Col className="d-flex justify-content-center align-content-center">
          <header className="App-header">
            <h1 className='fw-light'>&lt;Rodrigo Gimenez&gt;</h1>
            <div className='fw-light text-center'>Desarrollador web</div>
          </header>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
