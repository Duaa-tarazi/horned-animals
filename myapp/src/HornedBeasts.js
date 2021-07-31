import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfClicks: 0
        }

    }
    incrementNumofLikes = () => {
        this.setState({
            numOfClicks: this.state.numOfClicks + 1
        })
    }
    getSelectedData=() =>{
        this.props.handleopen();
        this.props.getSelectedData(this.props.imageUrl,this.props.title,this.props.description,this.state.numOfClicks)
    };
    render() {
        return (
            <Col>
                <Card style={{ width: '18rem' }} onClick={this.getSelectedData}>
                    <Card.Img onClick={this.incrementNumofLikes} variant="top" src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <p>Num of clicks:
                            {this.state.numOfClicks}</p>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}
export default HornedBeasts;