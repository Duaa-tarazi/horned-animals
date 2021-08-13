import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Header extends React.Component{
  render(){
    return(
      <>
      <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#">Gallery of Horns</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
      </>
    )
  }
}
export default Header;