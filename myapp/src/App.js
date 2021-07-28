import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/esm/Row';


class App extends React.Component{
  render(){
    return(
      <>
      <Header/>
      <Row xs={1} md={3} className="g-4">

      <Main/>
      </Row>
      <Footer/>
      </>
    )
  }
}
export default App;