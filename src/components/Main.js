import React from 'react';
import HornedBeasts from "./HornedBeasts"

class Main extends React.Component {
 
  render(){
    return(
      this.props.datajson.map(item => {
        return (
      <HornedBeasts
      title={item.title}
      image_url={item.image_url}
              description={item.description}
              // showing={this.props.handleOpen}
              getSelectedBeastData={this.props.getSelectedBeastData}
            />
    )
        }
      ))
  }
}
    
 export default Main;