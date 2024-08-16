import './App.css';
import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/row';

function App() {
  return (
    <div className="App container-fluid">
      <Row>
        <Col xs={6}>
          <header className="App-header">

            <h1 className='fw-light'>&lt;Rodrigo Gimenez&gt;</h1>
            <span className='fw-light'>Desarrollador web</span>
          </header>
        </Col>
      </Row>
    </div>
  );
}

export default App;
