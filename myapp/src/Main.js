import React from 'react';
import HornedBeasts from './HornedBeasts';




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:this.props.datajson ,

    }
  }
  render(){
    return(
      this.state.data.map(item => {
        return (
      <HornedBeasts
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
              handleopen={this.props.handleopen}
              getSelectedData={this.props.getSelectedData}        
            />

    )
        }
      ))

  }}

        
    
 export default Main;