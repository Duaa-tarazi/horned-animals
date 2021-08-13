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
            numOfClicks: this.state.numOfClicks + 1, 
        })
        // this.props.showing();
        // this.props.getSelectedBeastData(this.props.image_url,this.props.title,this.props.description)
    };

    getSelectedData=()=>{
        // this.props.showing();
        this.props.getSelectedBeastData(this.props.image_url,this.props.title,this.props.description,true)
        // this.props.incrementNumofLikes();
         
    };


    render() {
        return (
            <Col>
                <Card style={{ width: '18rem' }} onClick={this.incrementNumofLikes}>
                    <Card.Img onClick={this.getSelectedData} variant="top" src={this.props.image_url} />
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