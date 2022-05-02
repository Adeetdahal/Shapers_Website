import React from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends React.Component {
 render(){ 
   return(
   <Map google={this.props.google}
  style={{width:"100%", height:"500px"}}
  zoom={10}
  initialCenter = {
    {
      lat: 27.717245,
      lng: 85.323959,
    }
  }
  />
  );
}
}
 




export default GoogleApiWrapper({
  apiKey: "AIzaSyBo4Je_rK5vO0lkJ8QyYfSVQAHHB4WjNXE"
})(MapContainer)