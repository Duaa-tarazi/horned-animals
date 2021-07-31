import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/esm/Row';
import datajson from './data.json';
import selectedBeast from './selectedBeast'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show:false,
      title:'',
      src:'',
      description:'',
    }
  }
  handleOpen= () =>{
    this.setState({
      show:true
    })
  }
  handleClose=()=>{
    this.setState({
      show:false
    })
  getSelectedBeastData=(title,src,description) =>{
      this.setState({
        title:title,
        src:src,
        description:description
      })
  }
  }
  render(){
    return(
      <>
      <Header/>
      <Row xs={1} md={3} className="g-4">
      <Main
      datajson={datajson}
      handleOpen={this.handleOpen}
      getSelectedBeastData={this.getSelectedBeastData}
      />
      </Row>
      <selectedBeast
      show={this.state.show}
      handleClose={this.handleClose}
      title={this.state.title}
      src={this.state.src}
      description={this.state.description}
      />
      <Footer/>
      </>
    )
  }
}
export default App;