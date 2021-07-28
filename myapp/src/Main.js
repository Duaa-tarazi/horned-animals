import React from 'react';
import HornedBeasts from './HornedBeasts';
import datajson from './data.json';


class Main extends React.Component{
  constructor(props){
    super (props);
    this.state={
      data : datajson
       

    }
  }
  render(){
    return(

    this.state.data.map(item=>{
      return(
      
      
      <HornedBeasts 
       title={item.title}
       imageUrl={item.image_url} 
       description={item.description}
        />
    )
    })
    )}}
export default Main;