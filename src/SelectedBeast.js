import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class selectedBeast extends React.Component {
  render() {
    console.log(this.props);

    return (
      <>

{/* 
<Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={this.props.image_url}
                            alt='ffgg'
                        />
                        <p>{this.props.description}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal> */}
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.image_url}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.description}</p>
            <img src={this.props.title} style={{ width: "400px" }} alt='horns' />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default selectedBeast;