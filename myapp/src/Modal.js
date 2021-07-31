import react from 'react';
import Modal from 'react-bootstrap/Modal';

class Modal extends react.Component{
    render(){
        return(
            <>
            <Modal show={this.props.show} onHide={this.props.handleClose}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body on onClick={this.props.numOfClicks}>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        )
    }
}