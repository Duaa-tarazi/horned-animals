import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/esm/Row';
import datajson from './data.json';
import selectedBeast from './selectedBeast';
import Form from 'react-bootstrap/esm/Form';
import { data } from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      src: '',
      description: '',
      filteredDatajson: datajson
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
    getSelectedBeastData = (title, src, description) => {
      this.setState({
        title: title,
        src: src,
        description: description
      })
    }
  }
  getNumOfHorns = (event) => {
    let horns = event.target.value;
    let filterData1 = data.filter((item) => {
      if (item.horns == horns)
      
    this.setState({
      filteredDatajson: filterData1
    });
  }

  render() {
    return (
      <>
        <Header />
        <Form.Lable>HOW MANY HOURS?</Form.Lable>
        <Form.Select aria-label="Default select example" onChange={this.getNumOfHorns}>
          <option value="all">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="Wooow">Woow</option>
        </Form.Select>
        <Row xs={1} md={3} className="g-4">
          <Main
            datajson={this.state.filterData}
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
        <Footer />
      </>
    )
  }
}
export default App;