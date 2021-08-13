import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/esm/Row';
import SelectedBeast from './SelectedBeast';
import datajson from './data.json';
// import HornsForm from './components/HornsForm';
// import Form from 'react-bootstrap/esm/Form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      image_url: '',
      description: '',
      // dataNew: datajson

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
    })
  }
  getSelectedBeastData = (title, image_url, description) => {
    this.setState({
      title: title,
      image_url: image_url,
      description: description,
      show:true
    })
  }

  // getNumOfHorns = (event) => {
  //   let horns = event.target.value;

  //   let filterData1 = dataNew.filter((item) => {

  //     if (item.horns == horns){
  //       this.setState({
  //         filteredDatajson: filterData1
  //       })
  //   }
  // }}


 

  render() {
    return (
      <>
        <Header />

       
        {/* // <Form>
        //   <Form.Lable>HOW MANY HOURNS?</Form.Lable>
        //   <Form.Select aria-label="Default select example" onChange={this.getNumOfHorns}>
        //     <option value="all">All</option>
        //     <option value="1">One</option>
        //     <option value="2">Two</option>
        //     <option value="3">Three</option>
        //     <option value="Wooow">Woow</option>
        //   </Form.Select>
        // </Form> */}
        
        {/* <HornsForm /> */}
        <Row xs={1} md={3} className="g-4">
          <Main
            datajson={datajson}
            // handleOpen={this.handleOpen}
            getSelectedBeastData={this.getSelectedBeastData}
          />
        </Row>
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          // getSelectedBeastData={this.getSelectedBeastData}


        />

        <Footer />
      </>
    )
  }
}
export default App;