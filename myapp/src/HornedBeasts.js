import React from "react";
import Card from 'react-bootstrap/Card';



class  HornedBeasts extends React.Component{
    constructor(props){
        super (props);
        this.state={
            numOfClicks:0
        }

    }
    incrementNumofLikes=()=>{
this.setState({
    numOfClicks:this.state.numOfClicks + 1
})
    }
    render(){
        return(
            <>

              

               <Card style={{ width: '18rem' }}>
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
            </> 
               );
    }

}
export default HornedBeasts;