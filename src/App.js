import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/esm/Row';
import datajson from './data.json';
import HornsForm from './components/HornsForm';
import selectedBeast from './selectedBeast'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      src: '',
      description: '',
      dataNew: datajson
    
    }
  }
  handleOpen = () => {
    this.setState({
      show: true
    })
  }
  handleClose = () => {
    this.setState({
      show: false
    })}
    getSelectedBeastData = (title, src, description) => {
      this.setState({
        title: title,
        src: src,
        description: description
      })
    }
  
  // getNumOfHorns = (event) => {
  //   let horns = event.target.value;

  //   let filterData1 = data.filter((item) => {

  //     if (item.horns == horns){
  //       this.setState({
  //         filteredDatajson: filterData1
  //       })
  //   }
  // }}


  // getNumOfHorns = (event) => {
  //   let horns = event.target.value; 
  // }
  

  render() {
      return(
      <>
        <Header />
        <br></br>
      <HornsForm/>
        <Row xs={1} md={3} className="g-4">
          <Main
            dataNew={this.state.dataNew}
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
          getSelectedBeastData={this.getSelectedBeastData}
       

        />
       
        <Footer />
      </>
    )
  }
}
export default App;