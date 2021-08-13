import React from 'react';
import HornedBeasts from './HornedBeasts';




class Main extends React.Component {
 
  render(){
    return(
      this.props.dataNew.map(item => {
        return (
      <HornedBeasts
              title={item.title}
              image_url={item.image_url}
              description={item.description}
              handleopen={this.props.handleopen}
              getSelectedData={this.props.getSelectedData}        
            />

    )
        }
      ))

  }
}


    
 export default Main;